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
        /*if (req.method === "GET" && req.url.startsWith("/protocolos/")){
                let urlFormat = req.split("/")
                let conversao = parseInt(urlFormat, 10)
                if (conversao){
                        for (let i = 0; i < protocolos.length; i++) {
                                if (conversao == protocolos[i]){
                                        res.writeHead(200, {"Content-Type": "application/json"})
                                        res.end(protocolos[i])
                                }else{
                                        res.writeHead(404, {"Content-Type": "application/json"})
                                        res.end(JSON.stringify({erro: "ID não encontrado"}))
                                }
                        }
                }
                
        }*/
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
})

server.listen(3000, () => {
        console.log("Servidor rodando na porta 3000")
})