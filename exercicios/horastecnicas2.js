/**
 * horas tecnicas 2
 */

const read = require('readline-sync')

let remuneracao , custo, horasMes, horasTecnicas, estimativa, total

console.clear()
console.log("")
console.log("===============================")
console.log("  cálculo de valor de serviço  ")
console.log("===============================")
console.log("")

//entrada 1
remuneracao = Number(read.question("remuneracao mensal pretendida: ").replace(",","."))
horasMes = Number(read.question("carga horaria mensal de trabalho: ").replace(",","."))
custo = Number(read.question("custo operacional: ").replace(",","."))

//processamento 1 
horasTecnicas = (remuneracao + (0.3 * remuneracao) + custo + (0.2 * remuneracao)) / horasMes

//saida 1 
console.log(`horas tecnicas: R$ ${horasTecnicas.toFixed(2)}`)

// entrada 2 
estimativa = Number(read.question("estimativa de horas desse servico: ").replace(",","."))

//processamento 2
total = horasTecnicas * estimativa

//saida 2 
console.log(`total a ser cobrado do cliente: R$ ${total.toFixed(2)}`)

