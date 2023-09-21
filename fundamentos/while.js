/**
 * Estudo das estruturas de controle 
 * while | do while
 */

const read = require('readline-sync')

let x = 1
let y = 1

while (x < 11 ){
    console.log("teste")
    x++
}

read.question ("precione [ENTRE] para continuar ") 
console.clear
do {
    console.log("teste da estrutura do while")
    y++
}  while (y < 11 )
