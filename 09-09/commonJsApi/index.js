//importando o express
const express = require("express");

//inicializando o express
const app = express();

//utilizando o metodo json do express para fazer o parse do body da requisição
app.use(express.json());

//rota raiz
app.get('/', (req, res) => {
    res.send("Hello World");
});

//servidor rodando na porta 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

const clients = require("./models/clients");

//renderizando a lista de clientes na rota raiz utilizando o metodo send e o verbo HTTP GET
app.get('/clients', (req, res) => {
    res.send(clients);
});

//renderizando um cliente específico na rota /client/:id utilizando get
app.get('/clients/:id', (req,res) => {
    const { id } = req.params;
    const client = clients.find((value) => value.id === Number(id));
    if (!client) return res.send('Client not found');
    res.send(client);
});

//criando um novo cliente na rota /cliente utilizando o metodo send e o verbo HTTP POST
app.post('/clients', (req, res) => {
    const name = req.body;
    const id = clients[clients.length - 1].id + 1;
    clients.push({ id, name});
    res.send('Client added succsessfully');
});