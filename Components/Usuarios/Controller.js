const User = require('./model');
const APICuentas = require('./../APICuentas/Controller')
exports.getAllUsers = async function(req, res) {


    try {
        const all = await User.find();
        return res.send(all);

    } catch (error) {
        return res.send(error)
    }

}

exports.getOneByEmail = async function(req, res) {



    const email = req.params.email;



    try {
        const one = await User.findOne({
            email
        });


        return res.send(
         one            
        );

    } catch (error) {
        return res.send(error)
    }


}



exports.updateOneUser = async function(req, res) {
    const id = req.params.userId;

    const update = await User.updateOne({ userid: id }, // Query parameter
        req.body, { upsert: false } // Options
    )
    return res.send(update);
}


exports.deleteOneUser = async function(req, res) {
    const email = req.params.email


    try {
        const one = await User.deleteOne({
            email
        });
        return res.send(one);

    } catch (error) {
        return res.send(error)
    }

}
exports.loginUser = async function (req , res) {
    const {email, password} = req.body
    
    
    //**const passencrypt = bcrypt (1234, key, hash)
    //body.password = passencrypt    
    //new uss(body)
    //if (login && bcrypt.compire(login.pass, pass))
    // ok!
    // else
    //  error
    
    
    try {
        const login = await User.findOne({
            email
        });
        if (login && login.password===password) {
            res.send ('Logeado correctamente ')
            
        } 
        else {

            res.send ('Error al Logear')
        }
        

    } catch (error) {
        return res.send(error)
    }
}
exports.createUsers = async function(req, res) {
    const { nombre, email, password} = req.body
    const userNuevo = new User({
        nombre,
        email,
        password,
    });
    
    let result;

    try {

        result = await userNuevo.save();

    } catch (e) {

        return res.send(e)
    }

    return res.send(result);
}



exports.addUsers = async function(req, res) {

    //obtengo el params.body

    const { nombre, email, password} = req.body

    //creamos un objeto = cuenta CON NEW//


    const nuevoUser = new User({ nombre, email, password, estado, clientid })


    let result;

    try {

        result = await nuevoUser.save();

    } catch (e) {

        return res.send(e)
    }

    return res.send(result);
}