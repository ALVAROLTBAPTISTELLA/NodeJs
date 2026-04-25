import express from 'express'

const app = express()

const PORT = 3000

app.get('/', (req, res) =>res.send('<h1>Página inicial</h1>'))

//para parâmetros opcionais na nova versão do Express utilizamos um ARRAY de rotas
app.get(['/bemvindo','/bemvindo/:nome'], (req, res)=>{
    const { nome='' } = req.params //desestruturação com valor padrão
    res.send(`<h1>Olá ${nome}, seja bem vindo!</h1>`)
})

app.listen(PORT, () =>console.log(`🚀servidor rodando em: http://localhost:${PORT}`))