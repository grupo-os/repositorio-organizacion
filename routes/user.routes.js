const router = require('express').Router();
const {
    rutaGet, rutaPost, rutaPut, rutaDelete 
} = require('../controllers/user.controllers');
const { body } = require('express-validator');
const { validarCampos } = require('../helpers/validacionCampos');

router.get('/find-user', rutaGet);

router.post(
    '/create-user',

    body('username', 'El email ingresado no posee el formato correcto').isEmail(),
    body('password', 'La contraseña debe tener como mínimo 8 caracteres').isLength({ min: 8 }),
    body('role', 'El rol seleccionado no está permitido').isIn(['admin_user', 'common_user']),
    validarCampos, 

    rutaPost
);

router.put('/update-user', rutaPut);

router.delete('/delete-user', rutaDelete);

module.exports = router;