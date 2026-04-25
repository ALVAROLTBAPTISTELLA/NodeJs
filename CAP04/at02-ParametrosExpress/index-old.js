import express from 'express'

const app = express()

const PORT = 3000

app.get('/', (req, res) =>res.send('<h1>Página inicial</h1>'))

app.get('/bemvindo/:nome', (req, res)=>{
    const { nome } = req.params //desestruturação
    res.send(`<h1>Olá ${nome}, seja bem vindo!</h1>`)
})

app.listen(PORT, () =>console.log(`/servidor rodando em: http://localhost:${PORT}`))