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
        console.log(`O saldo da conta do ${this.getTitular()} é R$ ${this.getSaldo().toFixed(2)}.`);
    }

    depositar(valor) {
        this._saldo += valor;
        console.log(`Crédito de R$ ${valor.toFixed(2)}`);
    }

    sacar(valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
            console.log(`Débito de R$ ${valor.toFixed(2)}`);
        } else {
            console.log("Operacao negada! Saldo insuficiente");
        }
    }

    pix(valor, destino) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
            destino.depositar(valor);
            console.log(`PIX de R$ ${valor.toFixed(2)} para ${destino.getTitular()} realizado com sucesso.`);
        } else {
            console.log("Operacao negada! Saldo insuficiente.");
        }
    }
    tranferenciaPoupanca(valor, poupanca) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
            poupanca.depositar(valor);
            console.log(`tranferencia de R$ ${valor.toFixed(2)} para ${poupanca.getTitular()} poupanca realizado com sucesso.`);
        } else {
            console.log("Operacao negada! Saldo insuficiente.");
        }
    }
}

class ContaPoupanca extends Conta {
    constructor(numero, titular, saldo) {
        super(numero, titular, saldo);
    }

    exibirSaldoPoupanca() {
        console.log(`O saldo da conta Poupança do ${this.getTitular()} é R$ ${this.getSaldo().toFixed(2)}.`);
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

let leandro = new Conta(1, "Leandro Ramos", 1000);
let sirlene = new Conta(2, "Sirlene Aparecida", 2000);
let robson = new Conta(3, "Robson Vaamond", 2900);
let poupancaRobson = new ContaPoupanca(10, "Robson Vaamond", 6000);

console.log(`Cliente: ${leandro.getTitular()} | conta: ${leandro.getNumero()}`.green);
leandro.exibirSaldo();

console.log(`Cliente: ${sirlene.getTitular()} | conta: ${sirlene.getNumero()}`.green);
sirlene.exibirSaldo();

console.log(`Cliente: ${robson.getTitular()} | conta: ${robson.getNumero()}`.green);
robson.exibirSaldo();

console.log(`Cliente: ${poupancaRobson.getTitular()} | conta: ${poupancaRobson.getNumero()}`.yellow);
poupancaRobson.exibirSaldo();

leandro.pix(200, sirlene); // Transfer from Leandro to Sirlene
leandro.pix(300, robson); // Transfer from Leandro to Robson
leandro.pix(100, poupancaRobson); // Transfer from Leandro to Robson's Poupança account

robson.tranferenciaPoupanca(900,poupancaRobson);
console.log("Updated Balances:");
leandro.exibirSaldo();
sirlene.exibirSaldo();
robson.exibirSaldo();
poupancaRobson.exibirSaldo();

