const read = require('readline-sync')

let venda, lucro,  custo

console.clear()
console.log("---------------------------")
console.log("calculadora de lucros")
console.log("")

custo = Number(read.question("Digite o valor do custo: ").replace(",","."))
lucro = Number(read.question("Digite o quanto de lucro deseja ganhar: ").replace(",","."))

venda = (custo*lucro)/100
venda += custo

console.log(` custo: ${custo.toFixed(2)}  |   lucro: ${lucro}%   |   venda: ${venda.toFixed(2)}`)
