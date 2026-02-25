import http from "http"

const protocolos = []

const server = http.createServer((req, res) => {
        if (req.method === "GET" && req.url === "/health") {
                res.writeHead(200, { "Content-Type": "application/json" })
                res.end(JSON.stringify({ status: "OK" }))
                return
        }
        if (req.method === "GET" && req.url === "/protocolos") {
                res.writeHead(200, { "Content-Type": "application/json" })
                res.end(JSON.stringify(protocolos))
                return
        }
        if (req.method === "GET" && req.url.startsWith("/protocolos/")){
                let url = req.url
                let urlFormatada = url.split("/")
                let idConvertido = parseInt(urlFormatada[2], 10)
                
                for (let i = 0; i < protocolos.length; i++) {
                        if (idConvertido == protocolos[i].id){
                                res.writeHead(200, {"Content-Type": "application/json"})
                                res.end(JSON.stringify(protocolos[i]))
                                return
                        }
                }
                res.writeHead(404, {"Content-Type": "application/json"})
                res.end(JSON.stringify({erro: "ID não encontrado"}))
                
        }
        if (req.method === "POST" && req.url === "/protocolos"){
                let body = ""
                req.on("data", chunk => {
                        body += chunk.toString()
                })

                req.on("end", () => {
                        try{
                                const dados = JSON.parse(body)
                                const { nome, tipo, data } = dados

                                if (!nome || !tipo || !data){
                                        res.writeHead(422, {"Content-Type": "application/json"})
                                        res.end(JSON.stringify({erro: "Campos obrigatórios ausentes"}))
                                        return
                                }
                                
                                const novoProtocolo = {
                                        id: protocolos.length + 1, 
                                        nome, 
                                        tipo, 
                                        data
                                }
                                protocolos.push(novoProtocolo)
                                res.writeHead(201, {"Content-Type": "application/json"})
                                res.end(JSON.stringify(novoProtocolo))
                        }catch (erro){
                                res.writeHead(400, {"Content-Type": "application/json"})
                                res.end(JSON.stringify({erro: "JSON inválido"}))
                        }
                })
                return
        }
        else{
                res.writeHead(404, {"Content-Type": "application/json"})
                res.end(JSON.stringify({erro: "Endpoint não encontrado"}))  
        }
})

server.listen(3000, () => {
        console.log("Servidor rodando na porta 3000")
})