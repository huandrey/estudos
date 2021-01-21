// Super classe, classe mae

function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo

    this.getSaldo = () => {
        return this.saldo
    }
}


Conta.prototype.sacar = function (valor) {

    if (valor > this.saldo) {
        console.log('Saldo indisponivel!')
        console.log('Seu saldo atual eh: ' + this.getSaldo())

    } else {
        this.saldo -= valor
        console.log('Seu saldo atual eh: ' + this.getSaldo())
    }
}

Conta.prototype.depositar = function (valor) {

    this.saldo += valor
    console.log('Seu saldo atual eh: ' + this.getSaldo())
}


function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente


ContaCorrente.prototype.sacar = function (valor) {
    if (valor > this.saldo + this.limite) {
        console.log('Saldo indisponivel!')
        console.log('Seu saldo atual eh: ' + this.getSaldo())

    } else if (valor > this.saldo && valor < this.limite) {
        this.limite -= valor
        this.saldo -= valor
        console.log('Seu saldo atual eh: ' + this.getSaldo())
        console.log(this.limite)
    }
}

const c = new Conta('0001', '123123', 0)

const cc = new ContaCorrente('0002', '21212', 0, 100)

cc.sacar(55)