const jwt = require('jsonwebtoken');

const generarJWT = (uid = '') => {
    
    return new Promise((resolve, reject) => {

        // Identificador del usuario...
        const payload = { uid };

        // Generación del json Web Token...
        jwt.sign(payload, process.env.SECRET, {
            expiresIn: '4h'
        },(err, token) => {
            if (err) {
                  console.log(err);
                  reject('Nose pudo generar el token');
            }else{
                resolve(token);
            }
    
            return res.json({
                usuario,
                token
            })
        })
    })

}

module.exports = {
    generarJWT
};