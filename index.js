const { urlencoded } = require('express');
const express = require('express');
require('dotenv').config();
const app = express();

//Middlewares...
app.use(express.json());
app.use(urlencoded({extended: false}));

//Settings...
app.set('port', process.env.PORT || 4000);

//Routes...
app.use(require('./routes/user.routes'));

app.get('/home', (req, res) => res.send(console.log('Servidor Express funcionando')))
app.listen(port, () => console.log(`servidor corriendo en el puerto 4000`))
