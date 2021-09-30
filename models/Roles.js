const { model, Schema } = require("mongoose");

const rolesSchema = new Schema({
    role: {
        type: String,
        required: true
    }
});

module.exports = model('Role', rolesSchema);