import express from 'express';
import axios from 'axios'
import {ceps} from './models/model.js'

const app = express();
const port = 3000;


async function fetchCepsData() {
    const promises = ceps.map(cep => 
        axios.get(`https://viacep.com.br/ws/${cep}/json`)
        .then(response => response.data)
        .catch(() => null) // retorna null em caso de erro
    );

    const results = await Promise.all(promises);
    return results.filter(data => data !== null)
};


app.get("/ceps", async (req, res) => {
    try {
        const data = await fetchCepsData();
        res.json(data);
    } catch (err) {
        res.status(400).json({message : 'Erro ao buscar os dados do CEPs.'})
    };
});






app.get("/", (req, res) => {
    console.log("Hello World")
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});