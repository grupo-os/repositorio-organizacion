const {model, Schema} = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    activo: {
        type: Boolean,
        default:true
    },
    /* email: {
        type: Boolean,
        required: true,
        unique: true
    },
    status: {
        type: Boolean,
        default: true
    }, */
    role: {
        type: String,
        required: true,
        /* enum: ['ADMIN_ROLE', 'COMMON_ROLE'] */
    }
},{
    versionKey: false
});

// UserSchema.methods.toJSON = function() {
//     const { password, _id, ...usuario } = this.toObject();
//     usuario.uid = _id;
//     return usuario;
// };

module.exports = model('User', UserSchema)