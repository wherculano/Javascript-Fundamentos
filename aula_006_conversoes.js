// tipo de dado
// booleanos


// conversao implicita
let numero = 19
let strNumero = "19"
console.log(`${numero} == ${strNumero}: ${numero == strNumero}`)  // compara valor
console.log(`${numero} === ${strNumero}: ${numero === strNumero}`)  // compara valor e tipo de dado
                                    // Number() + String()
console.log(`${numero} + ${strNumero}: ${numero + strNumero}`)
                                    // Number() + Number()
console.log(`${numero} + ${strNumero}: ${numero + Number(strNumero)}`)

console.log('-=-=-=-=-=-=-=-=-=')

// conversao explicita
const strCpf = "12345678910"
const cpf = Number(strCpf)
console.log(`${strCpf}: Tipo: ${typeof strCpf}`)
console.log(`${cpf}: Tipo: ${typeof cpf}`)

// NaN
const varNaN = Number('123a')
console.log(varNaN)