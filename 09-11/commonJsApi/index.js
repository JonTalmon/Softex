import express from 'express';
import {clients} from './models/clients.js';

const app = express();

//Fazendo parse do body "?"
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World")
});

app.get('/clients' , (req, res) => {
    res.send(clients);
});

app.get('/clients/:id' , (req, res) => {
    const { id } = req.params;
    const client = clients.find((value) => value.id === Number(id));
    if (!client) return res.send(console.log("Client not found"));
    res.send(client);
});

app.post('/clients' , (req, res) => {
    const { name } = req.body;
    const id  = clients.length + 1;
    clients.push({ id, name});
    res.send("Client added");
});

app.put('/clients/:id' , (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const client = clients.find((value) => value.id === Number(id));
    if (!client) return res.send("Client not found");
    clients.name = name;
    res.send("Client's name updated!");
});







app.listen(3000, () =>{
    console.log("Servidor rodando na porta 3000");
});