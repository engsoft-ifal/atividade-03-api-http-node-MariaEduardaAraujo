import http from "http"

const server = http.createServer((req, res) => {
        if (req.method === "GET" && req.url === "/health") {
                res.writeHead(201, { "Content-Type": "application/json" })
                res.end(JSON.stringify({ status: "OK" }))
                return
        }
        if (req.method === "GET" && req.url === "/protocolos") {
                res.writeHead(200, { "Content-Type": "application/json" })
                res.end(JSON.stringify())
                return
        }
        if (req.method === "GET" && req.url === "/protocolos/ID"){

        }
        if (req.method === "POST" && req.url === "/protocolos"){

        }
        
        req.writeHead(404)
        req.end()
})

server.listen(3000, () => {
        console.log("Servidor rodando na porta 3000")
})