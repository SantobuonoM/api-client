const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/MultiApi', { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {

    if (err) throw err;

    console.log('Base de datos ONLINE')
});