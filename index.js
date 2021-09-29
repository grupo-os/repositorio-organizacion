const { urlencoded } = require('express');  
const express = require('express');
require('dotenv').config();
const app = express();

// Database Connection...
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
app.listen(app.get("port"), () => 

    console.log(`servidor corriendo en el pueto ${app.get("port")}`)
)

// app.get('/home', (req, res) => res.send(console.log('Servidor Express funcionando')))
