const Clientes = require('./model');

exports.getAllAccounts = async function(req, res) {
    return res.send('Todos las Cuentas');

}


exports.addAccounts = async function(req, res) {

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