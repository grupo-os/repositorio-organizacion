const { urlencoded } = require('express');
const express = require('express');
require('dotenv').config();
const app = express();

// Connection to database...
const conectarDB = require('./database');
conectarDB();

//Middlewares...
app.use(express.json());
app.use(express.urlencoded({extended: false})); 

//Settings...
app.set('port', process.env.PORT || 4000);

//Routes...
app.use(require('./routes/user.routes')); 

// Listen...
app.listen(4000, () => console.log('servidor corriendo en el pueto 4000'))

// app.get('/home', (req, res) => res.send(console.log('Servidor Express funcionando')))
