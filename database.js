const mongoose = require('mongoose');

const conectarDB = () => {
    mongoose.connect(process.env.URI)
    .then(() => console.log('Conexion a BD exitosa!!!'))
    .catch((error) => console.log('Fallo la conexion a la BD: ', error))
}

module.exports = conectarDB; 