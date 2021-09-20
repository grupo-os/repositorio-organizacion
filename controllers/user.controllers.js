const ctrlHome = {};
const User = require('../models/user');

// Devuelve todos los usuarios de la conexion...
ctrlHome.rutaGet = async (req, res) => {
    const users = await User.find({activo: true}); //Consulta todos los documentos...
    
    // Respuesta del servidor...
    res.json(users);
};

// Controlador que almacena un nuevo usuario...
ctrlHome.rutaPost = async (req, res) => {
    const {username, password} = req.body;

    try {
        const user = new User({username, password});
        await user.save();
        return res.json({msg: 'Usuario creado correctamente'});

    } catch (error) {

        console.log('Error al crear un nuevo usuario: ', error);
        res.status(500).json({msg: 'Error al crear nuevo usuario'})
    }
};

// Controlador que actualiza la informacion de los usuarios...
ctrlHome.rutaPut = async (req, res) => {

    const {username, password, id} = req.body;
    try {

        const user = await User.findByIdAndUpdate(id, {username, password}, {new: true});

        return res.json({
            msg: 'Usuario actualizado correctamente',
            user
        });
    } catch (error) {
        console.log('Error al actualizar usuario: ', error);
    }
};

// Controlador para eliminar un usuario de la BD físicamente...
ctrlHome.rutaDelete = async (req, res) => {
    const {id} = req.body;

    try {
        // Ejecucion normal del programa...
        await User.findByIdAndDelete(id);

        return res.json({msg: 'Usuario eleminado correctamente'});
    } catch (error) {

        // Si ocurre un error...
        console.log('Error al eliminar usuario: ', error);
    }
};

module.exports = ctrlHome