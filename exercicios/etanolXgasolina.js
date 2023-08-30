/**
 *  APP etanol X gasolina 
 */

// pacote  usado para entrada de dados via terminal 
const read = require("readline-sync")
const colors = require('colors')
//variaveis 
let etanol, gasolina
// limpar a tela do console 
console.clear()
console.log("==========================")
console.log("                          ")
console.log("        postinho          ")
console.log("                          ")
console.log("==========================")
// entrada 
//Number () converte uma string em numeros 
//.replace() trocar um caractere por outro 
etanol = Number(read.question("digite o valor do etanol: ").replace(",", "."))
gasolina = Number(read.question("digite o valor do gasolina: ").replace(",", "."))

if (etanol < 0.7 * gasolina) {
    console.clear()
    console.log("==========================")
    console.log("                          ")
    console.log("       etanol             ")
    console.log("                          ")
    console.log("==========================")
} else {
    console.clear()
    console.log("==========================")
    console.log("                          ")
    console.log("       gasolina           ")
    console.log("                          ")
    console.log("==========================")
}