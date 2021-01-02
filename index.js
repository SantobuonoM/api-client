require('./DB/db');

const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')




const bodyParser = require('body-parser')
const clientRouter = require('./Components/Clientes/Router');
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/clientes', clientRouter);




//levanta app//

try {
    app.listen(process.env.PORT, () => {
        console.log('Escuchando puerto:', process.env.PORT)
    });

} catch (error) {
    console.log(error);
}