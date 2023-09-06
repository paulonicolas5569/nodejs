/**
 * jogo do dado 
 */

const read = require('readline-sync')

let face

console.clear()

console.log("============================================")
console.log("               jogo do dado                 ")
console.log("============================================")

read.question("precione a tecla [entre] para lancar o dado: ")
face = Math.floor(Math.random() * 6 + 1)
switch (face) {
    case 1:
        console.log(" _______")
        console.log("|       |")
        console.log("|   0   |")
        console.log("|_______|")
        break
    case 2:
        console.log(" _______")
        console.log("| 0     |")
        console.log("|       |")
        console.log("|_____0_|")
        break
    case 3:
        console.log(" _______")
        console.log("| 0     |")
        console.log("|   0   |")
        console.log("|_____0_|")
        break
    case 4:
        console.log(" _______")
        console.log("| 0   0 |")
        console.log("|       |")
        console.log("|_0___0_|")
        break
    case 5:
        console.log(" _______")
        console.log("| 0   0 |")
        console.log("|   0   |")
        console.log("|_0___0_|")
        break
    case 6:
        console.log(" _______")
        console.log("| 0   0 |")
        console.log("| 0   0 |")
        console.log("|_0___0_|")
        break


}
