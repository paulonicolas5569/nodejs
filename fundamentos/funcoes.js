/**
 * Estudo das Funções 
 */

// função simples 
function hello() {
    console.log ("hello function")

}

//para executar uma função basta escrever o nome da função dom perênteses 

hello()

// funções atribuidas 
const hello2 = function(){
    console.log("hello Function atribuida")
}

hello2()

// função atribuida simplificada  (arrow function)
const hello3 = () => {
    console.log("hello arrow function")
} 

hello3()

console.log(typeof(hello3))