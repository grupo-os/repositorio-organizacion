const User = require('../models/user');
const ctrlAuth = {};
const { generarJWT } = require('../helpers/generarJWT');
// const jwt = require('jsonwebtoken');

ctrlAuth.login = async (req, res) => {
    
    const { username, password } = req.body; // Datos enviados por el cliente...
    
    const usuario = await User.find(user => {

        return user.username === username && user.password === password;
    }); //Se busca al usuario en la base de datos...

    // Verificamos si el usuario existe...
    if (!usuario) {
        return res.status(401).json({
            msg: 'EL usuario no existe'
        });
    };

    // Verificamos si el usuario está activo...
    if (!usuario.activo) {
        res.status(401).json({
            msg: 'El usuario no esta activo'
        });
    };

    // Si el usuario existe...
    const token = await generarJWT(usuario.uid)
    return res.json({
        token,
        usuario
    });
};

module.exports = ctrlAuth;