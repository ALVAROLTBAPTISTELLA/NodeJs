const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

console.log("Olá, Mundo..!!")

rl.question("Qual é seu nome?.: \n", nome=>{
    console.log(`Olá ${nome}`)
    rl.close()
})

console.log("Olá NODE..!!")
