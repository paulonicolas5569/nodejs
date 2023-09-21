/**
 * exemplo do uso da estrutura while 
 */

const read = require('readline-sync')

let valor = 7
let i = 1

console.clear()

while (i < 11) {
    console.log(`${valor} x ${i} = ${i * valor}`)
    i++
}
