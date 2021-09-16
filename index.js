const { urlencoded } = require('express');
const express = require('express')
require('dotenv').config()
const app = express()
const port = 4000

//Middlewares...
app.use(express.json());
app.use(urlencoded({extended: false}))

//Settings...
app.set('port', process.env.PORT || 4000)

app.get('/home', (req, res) => res.send(console.log('Servidor Express funcionando')))
app.listen(port, () => console.log(`servidor corriendo en el puerto 4000`))
