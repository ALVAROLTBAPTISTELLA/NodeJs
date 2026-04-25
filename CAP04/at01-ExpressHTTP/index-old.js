const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('<h1>Página inicial</h1><p>Hello World!</p>')
})
app.get('/cadastro', (req, res) => {
  res.send('<h1>Página de cadastro foi acessada</h1><p><h5>Implementar módulos</h5></p>')
})
app.get('/usuario', (req, res) => {
  res.send('<h1>Página de usuário foi acessada</h1>')
})
app.get('/consulta', (req, res) => {
  res.send('<h1>Página de consulta foi acessada</h1>')
})

app.listen(PORT, () => {
  console.log(`/servidor rodando em: http://localhost:${PORT}`)
})
