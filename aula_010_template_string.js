const nome = "Wagner"
const anoNasc = 1988
const anoAtual = new Date().getFullYear() 
let idade = anoAtual - anoNasc


// Template string
console.log(`\nOlá, meu nome é ${nome}, nasci no ano ${anoNasc} e hoje (${anoAtual}) tenho ${idade} anos.\n`)
