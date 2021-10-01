const ctrlHome = {};
const { request, response } = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');


// Devuelve todos los usuarios de la conexion...
ctrlHome.rutaGet = async (req, res) => {

    const query = { activo: true };

    const [total, usuarios] = await Promise.all([
        
        User.count(query),
        User.find(query) 
    ]);

    
    res.json({
        total,
        usuarios // Respuesta del servidor...
    }); 
};

// Controlador que almacena un nuevo usuario...
ctrlHome.rutaPost = async (req, res) => {

    const {username, password, role} = req.body;

    // Encriptar la contraseña...

    try {
        const user = new User({ username, password, role });
        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync(password, salt);
        await user.save();


        return res.json(user);

    } catch (error) {

        console.log('Error al crear un nuevo usuario: ', error);
        res.status(500).json({msg: 'Error al crear nuevo usuario'})
    }
};

// Controlador que actualiza la informacion de los usuarios...
ctrlHome.rutaPut = async (req = request, res = response) => {
    // const {username, password, id} = req.body;

    const { id } = req.params;
    let { username, password, role, ...restoDeDatos} = req.body;

    if (password) {
        const salt = bcryptjs.genSaltSync();
        password = bcryptjs.hashSync(password, salt);
    }

    try {
        const user = await User.findByIdAndUpdate(id, {username, password, role}, {new: true});

        return res.json(user);
    } catch (error) {
        console.log('Error al actualizar usuario: ', error);
    }
};

// Controlador para eliminar un usuario de la BD físicamente...
ctrlHome.rutaDelete = async (req, res) => {
    const {id} = req.body;

    try {
        
        await User.findByIdAndDelete(id); // Ejecucion normal del programa...

        return res.json({msg: 'Usuario eleminado correctamente'});

    } catch (error) {

        console.log('Error al eliminar usuario: ', error); // Si ocurre un error...
    }
};

module.exports = ctrlHome