// HERANÇA EXEMPLO

// CLASSE PAI
class Conta {
    constructor(nome, idade, saldo){
        this.nome = nome
        this.idade = idade
        this._saldo = saldo

    }

    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo += valor;
    }

    sacar(valor){
        if (valor > this._saldo){
            return 'Negado';
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
    depositar(valor){
        this.saldo += valor;
        return this._saldo;
    }

}

// CLASSE FILHA
class ContaCorrente extends Conta {
    constructor(nome, idade, agencia, cc, saldo){
        // passar parametros para a classe pai
        super(nome, idade, saldo);
        this.TIPO = 'CORRENTE'
        this.agencia = agencia
        this.cc = cc
    }
}


// INSTANCIANDO OBJETOS
// let p1 = new Conta('p1', 2, 1);
// console.log(p1);
let c1 = new ContaCorrente('c1', 1, 1, 1, 0)
console.log(c1)
c1.depositar(10);
console.log(c1)
console.log(c1.sacar(15))
console.log(c1.saldo)
