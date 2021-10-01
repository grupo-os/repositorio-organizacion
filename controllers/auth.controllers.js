const User = require('../models/user');
const ctrlAuth = {};
const { generarJWT } = require('../helpers/generarJWT');


ctrlAuth.login = async (req, res) => {
    
    const { username, password } = req.body; // Datos enviados por el cliente...
    
    const usuario = await User.findOne({username}); //Se busca al usuario en la base de datos...
    console.log(usuario);
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
    const token = await generarJWT(usuario.id)
    return res.json({
        token,
        usuario
    });
};

module.exports = ctrlAuth;