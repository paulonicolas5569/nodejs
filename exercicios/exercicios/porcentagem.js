// variaveis e biblioteca 
const read = require('readline-sync')
let x,y,valor 

console.clear()
console.log("bem vindo ao calxulo de porcentaem")
//entrada 
x = Number(read.question("digite o valor inicial: "))
y = Number(read.question("digite o valor que deseja fazer para a porcentagem: "))

//processamento 
valor = (y*x)/100

//saida 
console.clear
console.log("________________________________________________")
console.log(`   o valor final de ${y}% de ${x}             `  )
console.log(`                 é ${valor}                   `  )
console.log("________________________________________________")


