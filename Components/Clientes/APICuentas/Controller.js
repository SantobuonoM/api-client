const Service = require('Service')

exports.getCuentasPorClienteId = async(id) => {

    const cuentas = await Service.getCuentasPorClienteId(id);

    return cuentas;


};