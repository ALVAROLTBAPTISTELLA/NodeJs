let prompt = require('prompt-sync')

interacao = prompt({sigint: true})

console.log("Olá, Mundo..!!")

const nome = interacao("Qual seu nome? .: ")

console.log(`Olá, ${nome}! \n`)

console.log("Olá NODE..!!")