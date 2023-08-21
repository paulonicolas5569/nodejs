/**
 * conversor de temperatura 
 * fahrenheit para celsius
 */

//importante do módulo (readline-sync)
const read = require("readline-sync")
//variáveis
let libras , kilos 
console.clear()
console.log("---------------------------")
console.log("---- conversor de peso ----")
console.log("---- libras para kilos ----")
console.log("---------------------------")
//entrada 
console.clear()
//entrada
console.log("------------------------------")
console.log("bem vindo ao conversor de peso")
console.log("------------------------------")

lib = Number(read.question("digite a peso em libras:"))
//processamento
kil = (lib / 2.2 ) 
console.log

//saida 
console.log(`o peso em  kg: ${kil.toFixed(2)}`)




