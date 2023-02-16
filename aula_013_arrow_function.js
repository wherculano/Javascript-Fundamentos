// funcao "normal"
function ola(nome){
    return `Olá, meu nome é ${nome}`
}
console.log(ola("Hyundai"))

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")

// arrow function
const hello = nome => `Olá, meu nome é ${nome}`
console.log(hello("Creta"))

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")

const soma = (a, b) => `${a} + ${b} = ${a+b}`
console.log(soma(2,7))

console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")

const somarNumerosPequenos = (x, y) => {
    if(x >= 10 || y >= 10){
        return "Soma apenas numeros menores que 10"
    }else{
        return x + y
    }
}
console.log(somarNumerosPequenos(10, 9))
console.log(somarNumerosPequenos(9, 9))