class Banco {
    tipoDeConta:string;
    saldo:number;

    constructor(tipoDeConta:string, saldo:number) {
        this.tipoDeConta = tipoDeConta;
        this.saldo = saldo;
    };

    adicionarValor(valor:number):number {
        this.saldo += valor;
        return this.saldo;
    };

    retirarValor(valor:number):number {
        this.saldo -= valor;
        return this.saldo;
    }

    consultarSaldo():void {
        return console.log(this.saldo);
    }
}