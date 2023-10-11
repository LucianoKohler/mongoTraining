const express = require('express');
const app = express();
const res = require('express/lib/response');
const mongoose = require('mongoose');

let db = require('./src/database.js');
let testeModel = require('./src/models/teste.js');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

let teste1 = new testeModel({
  email: "teste1@gmail.com",
  nome: "teste1",
  cpf: "12345678901",
})

app.post('/addteste', (req, res) => {
  teste1.save()
  .then(item => {
    res.send("item salvo no banco de dados!")
  })
  .catch(error => {
    res.status(400).send("Erro ao salvar no banco...")
  })
});

const port = 3000;
app.listen(port, (req, res) => {
  console.log('Servidor aberto em: \u001b[1;36mhttp://localhost:'+port+'\u001b[0m');
})