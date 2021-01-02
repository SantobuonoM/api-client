const axios = require('axios');
const fetch = require('node-fetch');

const url = process.env.URL_CUENTAS_API



exports.getCuentasPorClienteId = async (clienteId) => {
    const baseUrl = `${url}/cuentas/oneByClienteId/${clienteId}`;
    const Cuentas = await fetch(
        baseUrl,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    return await Cuentas.json();

};