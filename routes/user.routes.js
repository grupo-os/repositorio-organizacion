const router = require('express').Router();
const {
    rutaGet, rutaPost, rutaPut, rutaDelete 
} = require('../controllers/user.controllers');
const { body } = require('express-validator');
const { validarCampos } = require('../helpers/validacionCampos');

// Ruta que muestra todos los usuarios de la coleccion...
router.get('/find-user', rutaGet);

// Ruta para agregar un nuevo usuario...
router.post(
    '/create-user',
    body('username', 'El email ingresado no posee el formato correcto').isEmail(),
    body('password', 'La contraseña debe tener como mínimo 8 caracteres').isLength({ min: 8 }),
    body('role', 'El rol seleccionado no está permitido').isIn(['admin_user', 'common_user']),
    validarCampos, 
    rutaPost
);

// Ruta para editar usuarios...
router.put(
    '/edit-user/:id', 
    body('username', 'El email ingresado no posee el formato correcto').isEmail(),
    body('password', 'La contraseña debe tener como mínimo 8 caracteres').isLength({ min: 8 }),
    body('role', 'El rol seleccionado no está permitido').isIn(['admin_user', 'common_user']),
    body('id', 'No es un id de MongoDB válido').isMongoId(),
    validarCampos,
    rutaPut
);

// Ruta para eliminar usuarios...
router.delete('/delete-user', rutaDelete);

module.exports = router;