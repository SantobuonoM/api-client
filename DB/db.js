const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Clientes', { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {

    if (err) throw err;

    console.log('Base de datos ONLINE')
});