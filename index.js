require('./DB/db');

const dotenv = require('dotenv').config()
const express = require('express')
const app = express()



const bodyParser = require('body-parser')
const accountRouter = require('./Clientes/Router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/cuentas', accountRouter);




//levanta app//

try {
    app.listen(process.env.PORT, () => {
        console.log('Escuchando puerto:', process.env.PORT)
    });

} catch (error) {
    console.log(error);
}