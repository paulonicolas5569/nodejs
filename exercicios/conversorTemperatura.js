/**
 * conversor de temperatura 
 * fahrenheit para celsius
 */

//importante do módulo (readline-sync)
const read = require("readline-sync")
//variáveis
let cel , fah 
console.clear()
console.log("---------------------------")
console.log("-- conversor de temperatura")
console.log("--fahrenheite para celsius")
console.log("")
//entrada 
console.clear()
//entrada
console.log("bem vindo ao conversor de temperatura")
fah = Number(read.question("digite a temperatura em fahrenheit:"))
//processamento
cel = (fah - 32) / 1.8

console.log
//saida 
console.log("A temperatura em  " + fah + " em fahrenheite é " + cel +"°c")


