/**
 * Estudo das funções 
 * Calculador 
 */
// Observação: funçoes não pode pode ser atrubuidas a variaveis podem ser declaradas no final do código , funcções atribuidads e arrow function precisam ser declaradas no final do codigo 


const read = require('readline-sync')

console.clear()
console.log("calculadora\n") // \n (pula/quebra) uma linha
console.log("1. Somar ")
console.log("2. Subitrair ")
console.log("3. Mutiplicar ")
console.log("4. Divdir ")
console.log("5. porcentagem \n")

let opcao = Number(read.question("digite a opcao desejada ").replace(",", "."))
//melhorando a experiencia do usuario (validação)
if (opcao < 1 || opcao > 5) {
    console.log("\ndigite um valor valido entre [1 e 5]")
    process.exit([0]) // encerra o aplicativo no console 
}

let num1 = Number(read.question("Digite o primeiro valor: ").replace(",", "."))
// replace, troca a virgula por ponto para poder fazer operações com os números
let num2 = Number(read.question("Digite o segundo valor: ").replace(",", "."))

// função somar 
//let somar = (num1, num2) => {
//console.log(`A somar de ${num1} + ${num2} = ${num1 + num2} `) 
//}

switch (opcao) {
       //calcular soma
    case 1:
        somar(num1, num2)
        break;

           //calcular subritação
    case 2:
        subitrair(num1, num2)
        break

        //   //calcular mutiplicação
    case 3:
        mutiplicar(num1, num2)
        break

        //   //calcular divisao
    case 4:
        dividir(num1, num2)
        break

    //calcular porcentagem
    case 5:
        porcentagem(num1, num2)
        break
    default:
        console.log("Opção inválida! Escolha novamente.")
        break
}

// função somar 
function somar(num1, num2) {
    return console.log(`A somar de ${num1} + ${num2} = ${num1 + num2} `)
}
function subitrair(num1, num2) {
    return console.log(`A Subtração de ${num1} - ${num2} = ${num1 - num2} `)
}

function mutiplicar(num1, num2) {
    return console.log(`A mutiplicação  de ${num1} * ${num2} = ${num1 * num2} `)
}

function dividir(num1, num2) {
    if (num2 === 0) {
        console.log("imposivel a divisão por zero")
        process.exit([0]) // encerra o aplicativo no console 
    } else {
        return console.log(`A Divisão de ${num1} / ${num2} = ${num1 / num2}`)
    }
    return console.log(`A divisão de ${num1} / ${num2} = ${num1 / num2} `)

}

function porcentagem(num1, num2) {
    return console.log(`A porcentagem ${num1} % ${num2} = ${num1 * num2 / 100} `)
}
