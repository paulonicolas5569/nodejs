/**
 *  ELEITOR - obrigatoriedade de votar
 */

const colors = require("colors")
const read = require("readline-sync")

let nome, idade

console.clear()
console.log("-------------------------------------------------------------------")
console.log("########:'##:::::::'########:'####:'########::'#######::'########::")
console.log("##.....:: ##::::::: ##.....::. ##::... ##..::'##.... ##: ##.... ##:")
console.log("##::::::: ##::::::: ##:::::::: ##::::: ##:::: ##:::: ##: ##:::: ##:")
console.log("######::: ##::::::: ######:::: ##::::: ##:::: ##:::: ##: ########::")
console.log("##...:::: ##::::::: ##...::::: ##::::: ##:::: ##:::: ##: ##.. ##:::")
console.log("##::::::: ##::::::: ##:::::::: ##::::: ##:::: ##:::: ##: ##::. ##::")
console.log("########: ########: ########:'####:::: ##::::. #######:: ##:::. ##:")
console.log("........::........::........::....:::::..::::::.......:::..:::::..::")
console.log("--------------------------------------------------------------------")

idade = Number(read.question("digita a sua idade:"))

if (idade < 16) {
    console.log("infelizmente vc nao pode votar ainda ")
} else if (idade >17 && idade < 71) {
    console.log("vc possou a idade obrigatoria para votar ")
} else {
    console.log("vc possou o voto facutativo ou seja vc nao e brigatorio a votar ")
}