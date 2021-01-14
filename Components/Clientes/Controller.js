const Clientes = require('./model');
const APICuentas = require('./../APICuentas/Controller')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.loginClients = async function(req, res) {

    try {
        const cliente = await Clientes.findOne({
            email: req.body.email
        });


        const login = bcrypt.compareSync(req.body.password, cliente.password); // true
        if (!login) throw new Error('Email o password incorrectos')
        const token = jwt.sign({
                id: cliente._id,
                nombre: cliente.nombre,
                email: cliente.email
            },
            'seed', { expiresIn: 60 * 60 * 24 });

        return res.json({
            ok: true,
            cliente: {
                id: cliente._id,
                nombre: cliente.nombre,
                email: cliente.email
            },
            token
        })
    } catch (error) {
        return res.send(error)
    };


}
exports.getAllClients = async function(req, res) {


    try {
        const all = await Clientes.find();
        return res.send(all);

    } catch (error) {
        return res.send(error)
    }

}

exports.getOneClient = async function(req, res) {



    const id = req.params.clienteId;



    try {
        const one = await Clientes.findOne({
            clientid: id
        });

        const cuentas = await APICuentas.getCuentasPorClienteId(id);

        return res.send({
            cliente: one,
            cuentas
        });

    } catch (error) {
        return res.send(error)
    }


}



exports.updateOneClient = async function(req, res) {
    const id = req.params.clienteId;

    const update = await Clientes.updateOne({ clientid: id }, // Query parameter
        req.body, { upsert: false } // Options
    )
    return res.send(update);
}


exports.deleteOneClient = async function(req, res) {
    const id = req.params.clienteId


    try {
        const one = await Clientes.deleteOne({
            clientid: id
        });
        return res.send(one);

    } catch (error) {
        return res.send(error)
    }

}

exports.createClients = async function(req, res) {
    const { nombre, email, password } = req.body
    const clienteNuevo = new Clientes({
        nombre,
        email,
        password: bcrypt.hashSync(password, 10)
    });
    let result;

    try {

        result = await clienteNuevo.save();

    } catch (e) {

        return res.send(e)
    }

    return res.send(result);
}



exports.addClients = async function(req, res) {

    //obtengo el params.body

    const { nombre, email, password } = req.body

    //creamos un objeto = cuenta CON NEW//


    const nuevoCliente = new Cliente({ nombre, email, password })


    let result;

    try {

        result = await nuevoCliente.save();

    } catch (e) {

        return res.send(e)
    }

    return res.send(result);
}