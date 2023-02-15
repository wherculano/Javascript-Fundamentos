const idadeQualquer_1 = 15
const idadeQualquer_2 = 25
const idadeQualquer_3 = 9
const idadeMinima = 18

// if else simples
if (idadeQualquer_1 >= idadeMinima){
    console.log("Preparando o chopp!")
}else{
    console.log("Preparando o suco!")
}

// Operador Ternario
console.log(idadeQualquer_2 >= idadeMinima ? "Preparando o chopp!" : "Preparando o suco!")

// if else if e else simples
if (idadeQualquer_3 >= idadeMinima){
    console.log("Preparando o chopp!")
}else if(idadeQualquer_3 >= 10){
    console.log("Preparando o suco!")
}else{
    console.log("Onde estão seus pais?")
}