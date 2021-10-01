const { response, request } = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user");


const validar_jwt = (req = request, res = response, next) => {

    // Header que debe contener el token enviado desde en front...
    const token = req.header('x-token');
    console.log(token);

    // Se verifica si el token viene en los headers...
    if (!token) {
        
        res.status(401).json({
            msg: 'Token inválido (El token no existe)'
        });
    };

    try {

        // Si existe el token...
        const { id } = jwt.verify(token, process.env.SECRET);

        if (!id) {
            return res.status(401).json({
                msg: 'Token inválido (No existe el id)'
            })
        };

        // Buscar el usuario en la DB por id...
        const user = User.find(user => {
            return user.id = id;
        });

        // Se valida la existencia del usuario...
        if (!user) {
            return res.status(401).json({
                msg: 'Token inválido (El usuario no existe en la DB)'
            });
        };

        req.usuario = User;

        next();

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            msg: 'Token inválido (La firma no coincide)'
        });
    }


    next();
};

module.exports = {
    validar_jwt
}