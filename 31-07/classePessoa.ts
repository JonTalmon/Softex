class Pessoa {
    nome:string;
    idade:number;

    constructor(nome:string, idade:number) {
        this.nome = nome;
        this.idade = idade;
    };

    seApresentar(): void {
        return console.log(`Olá! meu nome é ${this.nome}!`);
    }

    dizerIdade(): void {
        return console.log(`Olá! Eu tenho ${this.idade} anos!`);   
    }
};