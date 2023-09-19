/**
 * exemplo do uso do laço for - tabuada 
 */

const read = require ('readline-sync')

let valor

console.log("=============================")
console.log("==========tabuada=========== ")
console.log("=============================")

valor = Number(read.question("digite o valor da tabuada"))

for (let i = 1; i < 11; i++ ){
    console.log(`${valor} x ${i} = ${valor * i}`)


}

