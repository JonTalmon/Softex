let pessoa = {
    nome: "João",
    idade: 30,
    saudacao: function() {
        return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`
    }
};


let carro = {
    marca: "Porsche",
    modelo: "718 Cayman S GT",
    ano: 2024,
    cor: "Amarelo",
};

/*console.log(carro);
console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.ano);
console.log(carro.cor);*/

let livro = {
    titulo: "Fogo e Sangue",
    autor: "George R. R. Martin",
    anoPublicacao: 2018,
};

/*console.log(livro);
console.log(livro.titulo);
console.log(livro.autor);
console.log(livro.anoPublicacao);*/

let biblioteca = [
    {
        titulo: "A Song of Ice and Fire",
        autor: "George R. R. Martin",
        anoPublicacao: 1996,
    }, 
    {
        titulo: "The Da Vinci Code",
        autor: "Dan Brown",
        anoPublicacao: 2003,
    },
    {
        titulo: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
        autor: "C. S. Lewis",
        anoPublicacao: 1950,
    }
];

console.log(biblioteca);