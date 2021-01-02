const mongoose = require('mongoose');

let Schema = mongoose.Schema;


let userSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']

    },
    email: {
        type: String,
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']


    }
});



module.exports = mongoose.model('Usuarios', userSchema);