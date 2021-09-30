const Role = require('../models/Roles');

const existeRole = async (role = '') =>{

    const roleEncontrado = await Role.findOne({ role });

    if (!roleEncontrado) {
        throw new Error('El rol especificado no existe');
    };
};

module.exports = {
    existeRole
};