const router = require('express').Router();
const {
    rutaGet, rutaPost, rutaPut, rutaDelete 
} = require('../controllers/user.controllers')

router.get('/find-user', rutaGet)

router.post('/create-user', rutaPost)

router.put('/update-user', rutaPut)

router.delete('/delete-user', rutaDelete)

module.exports = router;