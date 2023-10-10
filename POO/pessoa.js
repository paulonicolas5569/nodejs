/**
 * POO - Estudo do encapsulamento
 */

// Classe modelo 
class pessoa {
    //atributos 
    constructor(nome, idade) {
        this.nome = nome //variavel publica
        //--------------------------------------------------
        let _idade = idade //let _idade (encapsular a variavel)
        //metodos gat e set (para acessar a vareavel idade)
        this.getIdade = () => {
            return _idade
        }
        this.setIdade = (novaIdade) => {
            _idade = novaIdade
        }
        //--------------------------------------------------
    }
    //métodos  (acões)
    apresentar() {
        console.log(`Òlá meu nome é ${this.nome} e tenho ${this.getIdade()} anos.`)
    }
}

/*** Instanciar (criar) objetos ***/

console.clear

const pessoa1 = new pessoa("Paulo", 20)
pessoa1.apresentar()
pessoa1.setIdade(21)
pessoa1.apresentar()