const read = require('readline-sync')

console.clear()

const reserva = 30

let remune, custo, invest, horasTecni

console.log("##::::'##::'#######::'########:::::'###:::::'######:")
console.log("##:::: ##:'##.... ##: ##.... ##:::'## ##:::'##... ##:")
console.log("##:::: ##: ##:::: ##: ##:::: ##::'##:. ##:: ##:::..::")
console.log("#########: ##:::: ##: ########::'##:::. ##:. ######::")
console.log("##.... ##: ##:::: ##: ##.. ##::: #########::..... ##:")
console.log("##:::: ##: ##:::: ##: ##::. ##:: ##.... ##:'##::: ##:")
console.log("##:::: ##:. #######:: ##:::. ##: ##:::: ##:. ######::")
console.log("..:::::..:::.......:::..:::::..::..:::::..:::......:::")
console.log("'########:'########::'######::'##::: ##:'####::'######:::::'###:::::'######::")
console.log("... ##..:: ##.....::'##... ##: ###:: ##:. ##::'##... ##:::'## ##:::'##... ##:")
console.log("::: ##:::: ##::::::: ##:::..:: ####: ##:: ##:: ##:::..:::'##:. ##:: ##:::..::")
console.log("::: ##:::: ######::: ##::::::: ## ## ##:: ##:: ##:::::::'##:::. ##:. ######::")
console.log("::: ##:::: ##...:::: ##::::::: ##. ####:: ##:: ##::::::: #########::..... ##:")
console.log("::: ##:::: ##::::::: ##::: ##: ##:. ###:: ##:: ##::: ##: ##.... ##:'##::: ##:")
console.log("::: ##:::: ########:. ######:: ##::. ##:'####:. ######:: ##:::: ##:. ######::")
console.log(":::..:::::........:::......:::..::::..::....:::......:::..:::::..:::......:::")
//
remune = Number(read.question("Digite a remuneracao mensal pretendida: ").replace(",","."))

custo = Number(read.question("Digite o custo operacional: ").replace(",","."))

invest = Number(read.question("Digite o Investimento: ").replace(",","."))

horasTecni = Number(read.question("Digite a horas trabalhadas por mes: "))

horasTecni = (remune+(remune*reserva)/100+custo+(invest*remune)/100)/horasTecni

console.log(horasTecni) 