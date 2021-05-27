const express = require ("express");
const app = express();
app.use(express.json());

const port = 3000;

const usuarioFernando = {
    id: 1,
    nome: "Fernando",
    Idade: 35
};

const usuarios = [usuarioFernando];

app.get ('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.listen(port, () => {
    console.log(`Server is up and rumnig on port ${port}`);
});
