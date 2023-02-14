// var escopo global, pouco utilizado hoje em dia
var primeiroNumeroVar = 1
var segundoNumeroVar = 9
var somaVar
console.log(primeiroNumeroVar, '+', segundoNumeroVar, '=',  primeiroNumeroVar+segundoNumeroVar)

// let escopo global (se estiver fora de um bloco), senão, fará parte apenas do bloco.
let num1 = 10
let num2 = 9
if (num1 >= 10){
    let soma = num1 + num2
    console.log(soma)
}else {
    let soma = num2 - num1
    console.log(soma)
}
// console.log(soma) da erro pois a variavel so existe dentro dos blocos

// const escopo global (se estiver fora de um bloco), senão, fará parte apenas do bloco.
// Porem, uma vez definido, não pode ter seu valor alterado
const strDataAtual = "14/02/2023"
console.log(strDataAtual)
// strDataAtual = '15/02/2023' Erro de Assignment, não se pode alterar o valor de uma constante
