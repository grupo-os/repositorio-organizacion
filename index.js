const express = require('express')
const app = express()
const port = 4000

app.get('/home', (req, res) => res.send('Servidor Express funcionando'))
app.listen(port, () => console.log(`Example app listening on port port!`))

