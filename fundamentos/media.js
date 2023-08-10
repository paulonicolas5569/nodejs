/**
 * app para calcular a média de 2 notas 
 */

//Vareaveis

let name, disciplina
let nota1, nota2, media 

console.clear

console.log("'########:::'#######::'##:::::::'########:'########:'####:'##::: ##:")
console.log("##.... ##:'##.... ##: ##::::::: ##.....::... ##..::. ##:: ###:: ##:")
console.log("##:::: ##: ##:::: ##: ##::::::: ##:::::::::: ##::::: ##:: ####: ##:")
console.log("########:: ##:::: ##: ##::::::: ######:::::: ##::::: ##:: ## ## ##:")
console.log("##.... ##: ##:::: ##: ##::::::: ##...::::::: ##::::: ##:: ##. ####:")
console.log("##:::: ##: ##:::: ##: ##::::::: ##:::::::::: ##::::: ##:: ##:. ###:")
console.log("########::. #######:: ########: ########:::: ##::::'####: ##::. ##:")
console.log("........::::.......:::........::........:::::..:::::....::..::::..:: ")           

//entrada das vareaveis 
nome = "Paulo Nicolas"
disciplina = "Matematica"
nota1 = 8 
nota2 = 9 

//processamento
media = (nota1 + nota2 ) / 2

//saida
console.log(`nome: ${nome}`)
console.log(`disciplina: ${disciplina}`)
console.log(`nota1: ${nota1}`)
console.log(`nota2: ${nota2}`)
console.log(`media final: ${media}`)


