const { response, request } = require("express");
const jwt = require("jsonwebtoken");

const validar_jwt = (req = request, res = response, next) => {
    // Header que debe contener el token enviado desde en front...
    const token = req.header('x-token');
    console.log(token);

    // Se verifica si el token viene en los headers...
    if (!token) {
        res.status(401).json({
            msg: 'Token no encontrado'
        });
    };

    try {

        // Si existe el token...
        jwt.verify(token, process.env.SECRET, () => {
            
        })
    } catch (error) {
        
    }


    next();
};

module.exports = {
    validar_jwt
}