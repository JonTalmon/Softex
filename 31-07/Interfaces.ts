interface Pessoa1 {
    nome: string,
    idade: number,
    altura: number,
    peso: number,
    imc?: number,
};

let pessoa: Pessoa1 = {
    nome: "Jônatas",
    idade: 24,
    altura: 1.74,
    peso: 84,
};

interface Produto1 {
    id: number,
    nome: string,
    preco: number,
    categoria: string,
};

let produtos1: Produto1[] = [
    {id: 1, nome: "Camiseta", preco: 100, categoria: "Camisas"},
    {id: 2, nome: "Bermuda", preco: 200, categoria: "Bermudas"},   
];

console.log(produtos1);

function adicionarNovoProduto(produto: Produto1): Produto1 {
    produtos1.push(produto);
    return produto;
};

let novoProduto = {
    id: 3,
    nome: "Calça", 
    preco: 300, 
    categoria: "Calças"
};


adicionarNovoProduto(novoProduto);

console.log(produtos1);