const axios = require('axios')

const url = process.env.URL_CUENTAS_API



exports.getCuentasPorClienteId = async(clienteId) => {
    const Cuentas = await axios.get(`${url}/cuentas/oneByClienteId/${clienteId}`);
    return Cuentas;

};