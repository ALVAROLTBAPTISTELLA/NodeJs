import http from 'node:http' // cria um servidor
import fs from 'node:fs' // sistema de arquivos
import path from 'node:path' // resolve o caminho
import { fileURLToPath } from 'node:url' //trata url para rotas e parâmetros

const PORTA = 3200

//necessário e, ES modules ´para resolver caminhos corretamente
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = http.createServer((req, res) => {
        const urlObj = new URL(req.url, `http://${req.headers.host}`)
        
        let pagina = urlObj.pathname.substring(1)
        //página padrão
        pagina = pagina === '' ? 'index.html' : pagina
        //garante a extensão .html
        if (!pagina.includes('html')){
            pagina += '.html'
        }
        //resolve o caminho absoluto do arquivo
        let caminhoArquivo = path.join(__dirname, pagina)
        if (fs.existsSync(caminhoArquivo)) {
            fs.readFile(caminhoArquivo, (err, data) => {
                if (err) {
                    res.writeHead(500, {'Content-Type': 'text/html'})
                    return res.end('<h1>Erro interno do servidor</h1>')
                }
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.end(data)
            })
        } else {
            caminhoArquivo = path.join(__dirname, 'pg404.html')
            fs.readFile(caminhoArquivo, (err, data) => {
                res.writeHead(404, {'Content-Type': 'text/html'})
                res.end(data)
            })
        }
})

server.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`)
})
