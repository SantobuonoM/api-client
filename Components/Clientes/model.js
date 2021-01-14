const mongoose = require('mongoose');

let Schema = mongoose.Schema;


let clienteSchema = new Schema({
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

const bcrypt = require('bcrypt');



module.exports = mongoose.model('Clientes', clienteSchema);