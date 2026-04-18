//server.js
import http from 'node:http'

//cria o serviço HTTP com uma callback que preocessa e responde as requisições

const server = http.createServer((req, res) => {
    //configura o cabeçalho da resposta
    res.setHeader ('Content-Type', 'text/html')
    //reponde a requisição
    res.end(`
        <head> <meta charset="UTF-8"></head>
        <body>
            <h1>Olá Mundo!!!</h1>
            <h2>Eita que rolou...!!!</h2>
        </body>
        `)
})

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})