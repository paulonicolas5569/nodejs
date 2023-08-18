/**
 * app para calcular a média de 2 notas 
 *
 */

//impoprtação do pacote readline-sync
const read = require("readline-sync")

//Vareaveis

let name, disciplina
let nota1, nota2, media 

console.clear()

console.log("'########:::'#######::'##:::::::'########:'########:'####:'##::: ##:")
console.log("##.... ##:'##.... ##: ##::::::: ##.....::... ##..::. ##:: ###:: ##:")
console.log("##:::: ##: ##:::: ##: ##::::::: ##:::::::::: ##::::: ##:: ####: ##:")
console.log("########:: ##:::: ##: ##::::::: ######:::::: ##::::: ##:: ## ## ##:")
console.log("##.... ##: ##:::: ##: ##::::::: ##...::::::: ##::::: ##:: ##. ####:")
console.log("##:::: ##: ##:::: ##: ##::::::: ##:::::::::: ##::::: ##:: ##:. ###:")
console.log("########::. #######:: ########: ########:::: ##::::'####: ##::. ##:")
console.log("........::::.......:::........::........:::::..:::::....::..::::..:: ")           

//entrada das vareaveis 
nome = read.question("digite o seu nome: ")
disciplina = read.question("digite a diciplina: ")
nota1 = Number(read.question("digite a nota1: ").replace(",","."))
nota2 = Number(read.question("digite a nota2: ").replace(",","."))

//processamento
media = (nota1 + nota2 ) / 2

//saida
console.clear()
console.log("----------------------------")
console.log("ficha do aluno") 
console.log(`nome: ${nome}`)
console.log(`disciplina: ${disciplina}`)
console.log(`nota1: ${nota1}`)
console.log(`nota2: ${nota2}`)
console.log(`media final: ${media}`)
console.log("-----------------------------")


