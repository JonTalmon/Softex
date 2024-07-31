interface Pessoa {
    nome: string,
    idade: number,
    altura: number,
    peso: number,
    imc?: number,
};

let pessoa1: Pessoa = {
    nome: "João",
    idade: 20,
    altura: 1.77,
    peso: 84,
};

interface Produto {
    id: number,
    nome: string,
    preco: number,
    categoria: string,
};

let produtos: Produto[] = [
    {id: 1, nome: "Produto 1", preco: 100, categoria: "Categoria 1"},
    {id: 2, nome: "Produto 2", preco: 200, categoria: "Categoria 2"},   
];

console.log(produtos);

function adicionarNovoProduto(produto: Produto) {
    produtos.push(produto);
};

adicionarNovoProduto({id: 3, nome: "Produto 3", preco: 300, categoria: "Categoria 3"});

console.log(produtos);
