const primeiroNumero = 5
const segundoNumero = 10
const numeroEmString = "5"

console.log(`${primeiroNumero} === ${segundoNumero}: ${primeiroNumero === segundoNumero}`)
console.log(`${primeiroNumero} > ${segundoNumero}: ${primeiroNumero > segundoNumero}`)
console.log(`${primeiroNumero} < ${segundoNumero}: ${primeiroNumero < segundoNumero}`)
console.log(`${primeiroNumero} != ${segundoNumero}: ${primeiroNumero != segundoNumero}`)

// == compara apenas valor, === compara tipo e valor
console.log(`${primeiroNumero} == ${numeroEmString}: ${primeiroNumero == numeroEmString}`)
console.log(`${primeiroNumero} === ${numeroEmString}: ${primeiroNumero === numeroEmString}`)