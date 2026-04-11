/*
//Funções ES6

 soma = (n1, n2)=>parseInt(n1) + parseInt(n2)


let sub = (n1, n2)=>parseInt(n1) - parseInt(n2)
exports.sub = sub

let mult = (n1, n2)=>parseInt(n1) * parseInt(n2)
exports.mult = mult

let div = (n1, n2)=>{
    if (n2==0){
        return "Não é possível dividir por zero.!"
    }
    return parseInt(n1) / parseInt(n2)
    //return n2==0?"Não é possível dividir por zero.!": parseInt(n1) / parseInt(n2)
}
exports.div = div
*/

// tranformando em objeto

calculadora = {
     soma:(n1, n2)=>parseInt(n1) + parseInt(n2),
    sub:(n1, n2)=>parseInt(n1) - parseInt(n2),
    mult:(n1, n2)=>parseInt(n1) * parseInt(n2),
    div:(n1, n2)=>{
    if (n2==0){
        return "Não é possível dividir por zero.!"
    }
    return parseInt(n1) / parseInt(n2)
    //return n2==0?"Não é possível dividir por zero.!": parseInt(n1) / parseInt(n2)
    }
}
exports.calculadora = calculadora
