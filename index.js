const express = require('express')
const app = express()
const port = 4000

app.get('/home', (req, res) => res.send(console.log('Servidor Express funcionando')))
app.listen(port, () => console.log(`servidor corriendo en el puerto 4000`))
