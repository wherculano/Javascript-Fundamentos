// Number
const firstNumber = 2
const secondNumber = 7

const mathAddOperation = firstNumber + secondNumber
console.log(mathAddOperation)  // rodar terminal: node <file_name>

// float numbers
const floatNumber = 9.9
const floatPointNumber = .99

const mathDivOperation = floatNumber / floatPointNumber
console.log(mathDivOperation)

// NaN (not a number)
const myName = "Wagner"
const anyNumber = 7

console.log(myName * anyNumber)

// Round a number (arredonda para o inteiro mais proximo)
const piNumber = Math.PI
console.log(piNumber)
const roundedPiNumber = Math.round(piNumber)  
console.log(roundedPiNumber)

// Fix a number (arredonda para cima, retorna uma string)
const mySalary = 15739.196
console.log(mySalary)

console.log(mySalary.toFixed(2))

// toLocaleString, converte um número para uma string, já tratando a questão do 
// arredondamento e convertendo para a moeda do país desejado.
const myNewSalary = 19951.786512
console.log(myNewSalary.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))

// Math.ceil() retorna o maior número inteiro que é maior que o número passado
console.log(Math.ceil(11.123))  // valor fica 12

// Math.floor() retorna o menor número inteiro que é menor que o número passado
console.log(Math.floor(11.789))  // valor fica 11