const Clientes = require('./model');
const APICuentas = require('./../APICuentas/Controller')
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
    const { nombre, email, password, estado, clientid } = req.body
    const clienteNuevo = new Clientes({
        nombre,
        email,
        password,
        estado,
        clientid
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

    const { nombre, email, password, estado, clientid } = req.body

    //creamos un objeto = cuenta CON NEW//


    const nuevoCliente = new Cliente({ nombre, email, password, estado, clientid })


    let result;

    try {

        result = await nuevoCliente.save();

    } catch (e) {

        return res.send(e)
    }

    return res.send(result);
}