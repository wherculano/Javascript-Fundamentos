// log de registro
console.log("Deu erro")

// log de erro
console.error("Deu erro de novo")
console.error(new Error("Mais um erro"))

// log de aviso
console.warn("Fica esperto")

// log tabulado
console.table([["Wagner", "Herculano"]])

// log tabulado com objeto
function Person(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}
const wagner = new Person("Wagner", "Herculano")
console.table([wagner])