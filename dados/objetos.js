/**
 * Estruturas de Dados 
 * Objetos
 */

const funcionario1 = {}
console.log(typeof(funcionario1))
//adicionar dados a estrutura
funcionario1.nome = "Paulo"
funcionario1.cargo = "Desenvolvedor"
funcionario1.email = "nicolasvnrrn@gmail.com"
funcionario1.salario = 5000
funcionario1.insta = "@paulonicolas5569"
// ler (buscar os dados da estrutura)
console.log(funcionario1) 
console.log(funcionario1.cargo)
//Modificando os dados da estrutura
funcionario1.nome = "Paulo Nicolas"
console.log(funcionario1)
//excluir dados de uma estrutura
delete funcionario1.insta
console.log(funcionario1)

funcionario2 = {
    nome : "Junior",
    cargo : "gerente",
    email:  "juniorsantana_dev@hotmail.com",
    salario: 40000
}
console.log(funcionario2)

const endereco1 = {
    lagradouro: "vicecity",
    cidade : "miami",
    estado : "lusia"
}

funcionario3 = {
    nome : "Deca",
    cargo : "desenvolvidor geral",
    email:  "decaribeiro_dev@hotmail.com",
    salario: 75000,
    ...endereco1 //... spread operador (união de 2 estruturas de dados)
}
console.log(funcionario3)


funcionario4 = {
    nome : "Franklin",
    cargo : "motorista",
    email:  "franklin_dev@hotmail.com",
    salario: 10000,
    ...endereco1 //... spread operador (união de 2 estruturas de dados)
}
console.log(funcionario4)

funcionario5 = {
    nome: "steve rogers",
    cargo: "militar/Soldado",
    email: "captao@gmail.com",
    salario: 150000,
    escudo: {
        ano:"1943",
        escudo:"vibranio",
        forca: 20000

    },suitUP: () => {
        console.log("🦾")
    }
}
console.log(funcionario5)