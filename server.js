const express = require('express');
// Instalar el body parse
const bodyParser = require('body-parser')
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(router);

router.get('/', (req,res)=>{
  console.log(req.body.text);
  console.log(req.headers);
  res.send('Hola desde el get');
}).post('/',(req,res)=>{
  res.send('Hola desde el post');
})

// app.use('/', (req,res)=>{
//   res.send('Hola que tal');
// })

app.listen(3000);
console.log('Aplicacion está escuchando en el puerto 3000');