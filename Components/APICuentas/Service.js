const axios = require('axios');
const fetch = require('node-fetch');
const bcrypt = require('bcrypt');
const url = process.env.URL_CUENTAS_API

// ============================
//  Vencimiento del Token
// ============================
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

exports.getCuentasPorClienteId = async(clienteId) => {
    const baseUrl = `${url}/cuentas/oneByClienteId/${clienteId}`;
    const Cuentas = await fetch(
        baseUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
    return await Cuentas.json();

};