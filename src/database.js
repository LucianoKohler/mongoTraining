let mongoose = require('mongoose');

class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
  let username = "lucianoK"
  let password = "admin123"
     mongoose.connect(`mongodb://${username}:${password}@learnship.kbdlcgh.mongodb.net/?retryWrites=true&w=majority/teste`)
       .then(() => {
         console.log('Conectado ao banco!!');
       })
       .catch(err => {
         console.error('Erro na conexão ' + err);
       })
  }
}

module.exports = new Database()