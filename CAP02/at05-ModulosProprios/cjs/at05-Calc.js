/*
//Funções ES5

function soma(n1, n2){
    return parseInt(n1) + parseInt(n2)
}
function sub(n1, n2){
    return parseInt(n1) - parseInt(n2)
}
function mult(n1, n2){
    return parseInt(n1) * parseInt(n2)
}
function div(n1, n2){
    return n2==0?"Não é possível dividir por zero.!": parseInt(n1) / parseInt(n2)
}
*/

/*

Tranformado em biblioteca

//Funções ES6

let soma = (n1, n2)=>parseInt(n1) + parseInt(n2)
let sub = (n1, n2)=>parseInt(n1) - parseInt(n2)
let mult = (n1, n2)=>parseInt(n1) * parseInt(n2)
let div = (n1, n2)=>{
    if (n2==0){
        return "Não é possível dividir por zero.!"
    }
    return parseInt(n1) / parseInt(n2)
    //return n2==0?"Não é possível dividir por zero.!": parseInt(n1) / parseInt(n2)
}

console.log('A soma é.: ', soma(10, 25))
console.log('A soma é.: ', soma(100, 205))
console.log('A subtração é.: ', sub(100, 20))
console.log('A multiplicação é.: ', mult(35, 5))
console.log('A divisão é.: ', div(225, 5))
console.log('A divisão é.: ', div(225, 0))
*/
const calc = require('./calculadora')

/*
console.log('A soma é.: ', calc.soma(10, 25))
console.log('A soma é.: ', calc.soma(100, 205))
console.log('A subtração é.: ', calc.sub(100, 20))
console.log('A multiplicação é.: ', calc.mult(35, 5))
console.log('A divisão é.: ', calc.div(225, 5))
console.log('A divisão é.: ', calc.div(225, 0))
*/

// outra forma para suprimir o 'calc.'
//let {soma, sub, mult, div} = calc // desestruturação do objeto

//outra forma transformadda em objeto
let {soma, sub, mult, div} = calc.calculadora // desestruturação do objeto
console.log('A soma é.: ', soma(10, 25))
console.log('A soma é.: ', soma(100, 205))
console.log('A subtração é.: ', sub(100, 20))
console.log('A multiplicação é.: ', mult(35, 5))
console.log('A divisão é.: ', div(225, 5))
console.log('A divisão é.: ', div(225, 0))

