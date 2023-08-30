/**
 * combustivel
 */

const read = require("readline-sync")

let gasolina, etanol

console.clear("")
console.log("================================")
console.log("                                ")
console.log("        gasolina x etanol       ")
console.log("                                ")
console.log("================================")

gasolina = Number(read.question("digite o valor da gasolina:").replace(",", "."))
etanol = Number(read.question("digite o valor do etanol:").replace(",", "."))

console.clear()
if (etanol / gasolina <= 0.7) {
    console.log("================================")
    console.log("                                ")
    console.log("            etanol              ")
    console.log("                                ")
    console.log("================================")
} else {
    console.log("================================")
    console.log("                                ")
    console.log("            gasolina            ")
    console.log("                                ")
    console.log("================================")
}  