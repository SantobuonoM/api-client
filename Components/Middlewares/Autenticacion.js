//=====================
// Verificar Token
// =====================
const dotenv = require('dotenv').config()

const jwt = require('jsonwebtoken')

exports.verificaToken = (req, res, next) => {

    let token = req.get('token');
    try {
        const cliente = jwt.verify(token, process.env.SEED, { algorithm: 'HS256' });

        console.log(cliente);

        req.cliente = cliente;

        next();

    } catch (error) {

        return res.status(401).send({ message: `${error.message}` })
    }

};