/**
 * POO - Fundamentos da Programação Orientada a objetos
 * Exemplo : Jogo Manecraft
 */

// classe modelo (abstração)
class Bloco {
    //atributos

    constructor(resistencia, testura) {
        this.resistencia = resistencia
        this.textura = testura
    }
    // ações (métodos)
    criarBloco() {
        console.log("-------------------")
        console.log("┍━━━━━━┓")
        console.log("│      │")
        console.log("│      │")
        console.log("└━━━━━━┘")
        console.log(`Bloco de ${this.textura}`)
        console.log(`Resistência: ${this.resistencia}`)
    }

    construir() {
        console.log(`Bloco de ${this.textura}colocado`)
    }

    minerar() {
        console.log("☐ ☐ ☐ Recursos Obtidos")
    }

    carregar() {
        console.log(" ☐ ☐ ☐ ")
        console.log(" ☐ ☐ ☐ ")
        console.log(" ☐ ☐ ☐ ")
    }
}

//classe modelo co herança (extends)
class Enxada extends Bloco {
    //atributos
    constructor(resistencia, textura, conquista) {
        super(resistencia, textura)
        this.conquista = conquista
    }

    //metodos 
    criarEnxada(){
        console.log("-------------------")
        console.log("-_")
        console.log(" /")
        console.log(`Enxada de ${this.textura}`)
        console.log(`Conquista: ${this.resistencia}`)
    }
    arar(){
        console.log(",_,_,_, terra arada!")
        if (this.conquista === true) {
            console.log("☀ A enxada ganhou uma nova característica!!!")
        }
    }
    //polimorfismo
    minerar(){
        console.log("☠ ✟ dano atribuido")
    }
}  

//criação de objetos (mundo)
console.clear
console.log("▄▄       ▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ ")
console.log("▐░░▌     ▐░░▌▐░░░░░░░░░░░▌▐░░▌      ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌")
console.log("▐░▌░▌   ▐░▐░▌ ▀▀▀▀█░█▀▀▀▀ ▐░▌░▌     ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀  ▀▀▀▀█░█▀▀▀▀ ")
console.log("▐░▌▐░▌ ▐░▌▐░▌     ▐░▌     ▐░▌▐░▌    ▐░▌▐░▌          ▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌               ▐░▌     ")
console.log("▐░▌ ▐░▐░▌ ▐░▌     ▐░▌     ▐░▌ ▐░▌   ▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░▌          ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄      ▐░▌     ")
console.log("▐░▌  ▐░▌  ▐░▌     ▐░▌     ▐░▌  ▐░▌  ▐░▌▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌     ▐░▌     ")
console.log("▐░▌   ▀   ▐░▌     ▐░▌     ▐░▌   ▐░▌ ▐░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌          ▐░█▀▀▀▀█░█▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀      ▐░▌     ")
console.log("▐░▌       ▐░▌     ▐░▌     ▐░▌    ▐░▌▐░▌▐░▌          ▐░▌          ▐░▌     ▐░▌  ▐░▌       ▐░▌▐░▌               ▐░▌     ")
console.log("▐░▌       ▐░▌ ▄▄▄▄█░█▄▄▄▄ ▐░▌     ▐░▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌      ▐░▌ ▐░▌       ▐░▌▐░▌               ▐░▌     ")
console.log("▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░▌      ▐░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌       ▐░▌▐░▌               ▐░▌     ")
console.log(" ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀        ▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀         ▀  ▀                 ▀      ")

//criando um bloco de terra 
// new (novo objeto)
// bloco (classe modelo(resistencia, textura))

const bloco1 = new Bloco(1, "terra")
bloco1.criarBloco()

//criando bloco de madeira 
const bloco2 = new Bloco(2, "madeira")
bloco2.criarBloco()
bloco2.construir()

//criando bloco de pedra 
const bloco3 = new Bloco(3, "pedra")
bloco3.criarBloco()
bloco3.minerar()

//criando cargas de bloco
const bloco4 = new Bloco(4, "ferro")
bloco4.criarBloco()
bloco4.carregar()


//criando uma enxada de madeira 
const enxada1 = new Enxada(2,"madeira", false)
enxada1.criarEnxada()
enxada1.arar()

const enxada2 = new Enxada(5,"pedra", true)
enxada2.criarEnxada()
enxada2.arar()

const enxada3 = new Enxada(10,"ferro", false)
enxada3.criarEnxada()
enxada3.minerar()

const enxada4 = new Enxada(15, "diamante" ,true)
enxada4.criarEnxada()
enxada4.minerar()


//console.log(typeof (Bloco))

