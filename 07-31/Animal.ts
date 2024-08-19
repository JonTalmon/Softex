class Animal {
    nome:string;
    som:string;

    constructor(nome:string, som:string) {
        this.nome = nome;
        this.som = som;
    }

    fazerSom():void {
        return console.log("Rrrrargh!")
    }
}