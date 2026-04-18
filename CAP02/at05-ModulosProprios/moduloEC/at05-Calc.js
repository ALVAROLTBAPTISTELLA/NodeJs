import calc from './calculadora.js'
let {soma, sub, mult, div} = calc // desestruturação do objeto
console.log('A soma é.: ', soma(10, 25))
console.log('A soma é.: ', soma(100, 205))
console.log('A subtração é.: ', sub(100, 20))
console.log('A multiplicação é.: ', mult(35, 5))
console.log('A divisão é.: ', div(225, 5))
console.log('A divisão é.: ', div(225, 0))
