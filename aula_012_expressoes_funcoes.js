// funcao
function somar(a, b){
    return a + b
}
console.log(somar(10,9))

// expressao de funcao
const soma = function(a, b){return a + b}
console.log(soma(2,7))

/*
Princial diferença entre ambas as declarações se trata do HOISTING.
Isso significa que o JS permite executar funções antes me de declara-las.
Pois é feita uma "listagem" de variáveis (do tipo var) e funções antes de executar tudo.
*/ 
console.log(ola())
function ola(){
    return "Olá"
}

console.log(hello()) // Erro !
const hello = function(){return "Hello"}