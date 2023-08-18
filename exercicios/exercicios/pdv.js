/**
 * PDV - pontos de vendas 
 */

// importação de módulos
const read = require('readline-sync')

//variaveis
let total, desconto, valor, dinheiro, troco 
console.clear()
console.log("'########::'########::'##::::'##:")
console.log(" ##.... ##: ##.... ##: ##:::: ##:")
console.log(" ##:::: ##: ##:::: ##: ##:::: ##:")
console.log(" ########:: ##:::: ##: ##:::: ##:")
console.log(" ##.....::: ##:::: ##:. ##:: ##::")
console.log(" ##:::::::: ##:::: ##::. ## ##:::")
console.log(" ##:::::::: ########::::. ###::::")
console.log(" ..:::::::::........::::::...:::::")

//entrada 1
valor = Number(read.question("digite o valor total da compra: ").replace(",",".")) 
desconto = Number(read.question("digite o valor do desconto em porcentagem:").replace(",","."))
//processamento 1 
total = valor - ((desconto * valor) / 100)
//saida 
console.log (`total: R$ ${total.toFixed(2)}`)
console.log("")
console.log("--------------------------------")
//entrada 2
dinheiro = Number(read.question("digiteo valor pago em dinheiro:").replace(",","."))
//processamento 2 
troco = dinheiro - total
// saída 2 
console.log (`troco: R$ ${troco.toFixed(2)}`)



