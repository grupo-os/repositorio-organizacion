const { urlencoded } = require('express');  
const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const app = express();

// Database Connection...
const conectarDB = require('./database');
conectarDB();

//Middlewares...
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: false})); 

//Settings...
app.set('port', process.env.PORT || 5000);

//Routes...
app.use(require('./routes/user.routes')); 
app.use(require('./routes/auth.routes')); 

// Listen...
app.listen(app.get("port"), () => 

    console.log(`servidor corriendo en el pueto ${app.get("port")}`)
)

// app.get('/home', (req, res) => res.send(console.log('Servidor Express funcionando')))
