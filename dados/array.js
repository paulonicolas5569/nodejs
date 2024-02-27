/**
 * estrutura de dados 
 * Array
 */

let alunosEN1 = ["Vitor", "Tania", "Pedro", "Maria", "Viviane", "Sirlene"] //array com os nomes dos alunos da turma EN1
console.log(typeof alunosEN1)
// exibindo dados de u array
console.log(alunosEN1.length); // quantos elementos tem no array?
console.log(alunosEN1)
console.table(alunosEN1)
// Adicionando dados no Array
alunosEN1.push("jorge")// Adiciona ao fim da lista 
console.table(alunosEN1)
alunosEN1.unshift("Luiza")// Adicionar ao inicio da lista 
console.table(alunosEN1)
alunosEN1.splice(4, 0, "Matheus", "julia")//(Indice 0 -> adicionar)
console.table(alunosEN1)
alunosEN1[12] = "leandro"
console.log(alunosEN1)
console.table(alunosEN1)
//modificar os dados de um array
alunosEN1[1] = "victor"
console.table(alunosEN1)
//excluir dados de um array
alunosEN1.pop()//excluir o utimo ítem da lista 
console.table(alunosEN1)
alunosEN1.shift()//exclui o primeiro item da lista
console.table(alunosEN1)
alunosEN1.splice(5, 1)// (Indece, número de registro excluidos )
console.table(alunosEN1)
delete alunosEN1[3]
console.table(alunosEN1)



// percorrendo um array
let notas = [3, 8, 5, 9, 2]

console.log(notas)
// laço for
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}

// for Each
notas.forEach((n) => {
    console.log(n)
})

//map() - Percorrer o array e gerrar outro array modificado
//Exemplo-1 : Somar 1 Ponto as Notas

let notasAtualizadas = notas.map((na) => {
    return na + 1
})
console.log(notas)
console.log(notasAtualizadas)

// Exemplo-2: converter o sistema do computação para letras 
// A (nota > 8) PA (nota entre 5 e 8) NA  (nota < 5) 
let notasConvertidas = notas.map((nc)=>{
    if (nc < 5){
        return "NA"
    }else if(nc > 8){
        return "A"
    }else{
        return "PA"
    }
})
console.log(notas)
console.log(notasConvertidas)

// Uma array tambem pode ser criadas como um objeto
let alunosEN2 = new Array("Tony", "Peter","Thor","Natasha")
console.log(alunosEN2)
console.table(alunosEN2)


let alunosEN3 = [
    {
        nome:"Bruce",
        idade:43,
        Bolsista: false
    },
    {
        nome:"Clark",
        idade:45,
        Bolsista: false
    },
    {
        nome:"Adiana",
        idade:36,
        Bolsista: false
    },
    {
        nome:"Barry",
        idade:23,
        Bolsista: true
    }
]
console.log(alunosEN3) 
console.table(alunosEN3)

//Uso de filtros 
//Exemplo-1
console.table(alunosEN3.filter((b) =>{
    return b.Bolsista === true
}))

//Exemplo-2
console.table(alunosEN3.filter((i) =>{
    return i.idade > 40
}))

//Exemplo-3: Calcular a media de idade dos alunos 
let somaIdades = alunosEN3.reduce((si, aluno) => {
    return si + aluno.idade
},0)// Iniciar apartir do índice 0
console.log(somaIdades)

let mediaIdades  = somaIdades / alunosEN3.length // Divide o total da soma por quantos elementos tem na lista
console.log(mediaIdades)






