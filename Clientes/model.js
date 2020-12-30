const mongoose = require('mongoose');

let Schema = mongoose.Schema;


let cuentaSchema = new Schema({
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

    },
    estado: {
        type: Boolean,
        default: true
    },
    clientid: {
        type: String,
        required: [true, 'El id del cliente es necesario']

    }
});



module.exports = mongoose.model('Cuentas', cuentaSchema);