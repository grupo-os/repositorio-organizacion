const router = require('express').Router();
const {
    rutaGet, rutaPost, rutaPut, rutaDelete 
} = require('../controllers/user.controllers');
const { body } = require('express-validator');
const { validarCampos } = require('../helpers/validacionCampos');
const { existeRole } = require('../middlewares/validaciones');
const { validar_jwt } = require('../middlewares/validarJWT');


// Ruta que muestra todos los usuarios de la coleccion...
router.get('/get-user', rutaGet);

// Ruta para agregar un nuevo usuario...
router.post(
    '/create-user',
    
    /* [body('username', 'El email ingresado no posee el formato correcto')
    .isEmail(),

    body('password', 'La contraseña debe tener como mínimo 8 caracteres')
    .isLength({ min: 8 })
    .not()
    .isEmpty(),

    body('role', 'El rol seleccionado no está permitido') 
    .custom(existeRole),

    // validarCampos,
    // validar_jwt,
    // esAdmin
    ],  */
    rutaPost
);

// Ruta para editar usuarios...
router.put(
    '/edit-user/:id',
    
    body('id', 'No es un id de MongoDB válido'),
    // .isMongoId(),
    
    [body('username', 'El email ingresado no posee el formato correcto')
    .isEmail(),

    body('password', 'La contraseña debe tener como mínimo 8 caracteres')
    .isLength({ min: 8 }),

    body('role', 'El rol seleccionado no está permitido')
    .isIn(['admin_user', 'common_user']),

    validarCampos],
    
    rutaPut
);

// Ruta para eliminar usuarios...
router.delete('/delete-user', rutaDelete);

module.exports = router;