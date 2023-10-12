const read = require('readline-sync');
const colors = require('colors');

class Conta {
    constructor(numero, titular, saldo) {
        this._titular = titular;
        this._saldo = saldo;
        this._numero = numero;
    }

    getTitular() {
        return this._titular;
    }

    getSaldo() {
        return this._saldo;
    }

    getNumero() {
        return this._numero;
    }

    exibirSaldo() {
        console.log(`O saldo da conta de ${this.getTitular()} é R$ ${this.getSaldo().toFixed(2)}.`);
    }

    depositar(valor) {
        this._saldo += valor;
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    }

    sacar(valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
        } else {
            console.log("Operação negada! Saldo insuficiente.");
        }
    }

    pix(valor, destino) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
            destino.depositar(valor);
            console.log(`PIX de R$ ${valor.toFixed(2)} para ${destino.getTitular()} realizado com sucesso.`);
        } else {
            console.log("Operação negada! Saldo insuficiente.");
        }
    }
}

class ContaPoupanca extends Conta {
    constructor(numero, titular, saldo) {
        super(numero, titular, saldo);
    }

    exibirSaldoPoupanca() {
        console.log(`O saldo da conta Poupança de ${this.getTitular()} é R$ ${this.getSaldo().toFixed(2)}.`);
    }
}

console.log("==========================================")
console.log("########:::::'###::::'##::: ##:'##:::'##: ")
console.log("##.... ##:::'## ##::: ###:: ##: ##::'##:: ")
console.log("##:::: ##::'##:. ##:: ####: ##: ##:'##::: ")
console.log("########::'##:::. ##: ## ## ##: #####:::: ")
console.log("##.... ##: #########: ##. ####: ##. ##::: ")
console.log("##:::: ##: ##.... ##: ##:. ###: ##:. ##:: ")
console.log("########:: ##:::: ##: ##::. ##: ##::. ##: ")
console.log("........:::..:::::..::..::::..::..::::..::")
console.log("==========================================")

function menu() {
    console.log("Escolha uma opção:");
    console.log("1. Exibir Saldo");
    console.log("2. Depositar");
    console.log("3. Sacar");
    console.log("4. Fazer PIX");
    console.log("0. Sair");
}

let leandro = new Conta(1, "Leandro Ramos", 1000);
let sirlene = new Conta(2, "Sirlene Aparecida", 2000);
let robson = new Conta(3, "Robson Vaamond", 2900);
let poupancaRobson = new ContaPoupanca(10, "Robson Vaamond", 6000);

while (true) {
    menu();
    const choice = read.question("Digite o número da opção desejada: ");

    switch (choice) {
        case '1':
            leandro.exibirSaldo();
            break;

        case '2':
            const depositAmount = parseFloat(read.question("Digite o valor a depositar: "));
            leandro.depositar(depositAmount);
            break;

        case '3':
            const withdrawAmount = parseFloat(read.question("Digite o valor a sacar: "));
            leandro.sacar(withdrawAmount);
            break;

        case '4':
            const pixAmount = parseFloat(read.question("Digite o valor para PIX: "));
            leandro.pix(pixAmount, sirlene); // Example: transferring to Sirlene
            break;

        case '0':
            process.exit(0);
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
            break;
    }
}
