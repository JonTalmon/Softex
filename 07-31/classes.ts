class Produto {
    cod:number;
    tamanho:number;
    peso:number;
    marca:string;
    nome:string;
    cor:string;
    

    constructor(cod:number, tamanho:number, peso:number, marca:string, nome:string, cor:string,) {
        this.cod = cod;
        this.tamanho = tamanho;
        this.peso = peso;
        this.marca = marca;
        this.nome = nome;
        this.cor = cor;
    }

    mostrarNome() {
        this.nome;
    };
    
}