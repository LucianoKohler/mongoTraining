const express = require('express');
const app = express();
const res = require('express/lib/response');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


const port = 3000;
app.listen(port, (req, res) => {
  console.log('Servidor aberto em: \u001b[1;36mhttp://localhost:'+port+'\u001b[0m');
})