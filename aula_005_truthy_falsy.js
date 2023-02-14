// Falsy
console.log("" == false)
console.log(0 == false)

console.log("-=-=-=-=-=-=-=-=-=-")

// Truthy
console.log(1 == true)

console.log("-=-=-=-=-=-=-=-=-=-")

// null: valor vazio
const variavelNull = null
console.log(variavelNull)

// undefined: variavel instanciada, mas sem atribuicao de valor
let variavelUndefined
console.log(variavelUndefined)

console.log("-=-=-=-=-=-=-=-=-=-")
console.log(typeof variavelUndefined)
console.log(typeof variavelNull)  // tipo objeto é "errado", porem não irão corrigir
console.log(typeof 1)
console.log(typeof "")

