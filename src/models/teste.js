const mongoose = require('mongoose');

let testeSchema = new mongoose.Schema({
  email: String,
  nome: String,
  cpf: String,
});

module.exports = mongoose.model('teste', testeSchema)
