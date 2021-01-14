const express = require('express');
const router = express.Router();
const cors = require('cors');

const Controller = require('./Controller');




// agrego controlador para acceder a su funcionalidades//   

router.get('/one/:email', [cors()], Controller.getOneByEmail);
router.get('/all', [cors()], Controller.getAllUsers);
router.post('/', [cors()], Controller.createUsers);
router.delete('/:email', [cors()], Controller.deleteOneUser);
router.put('/:email', [cors()], Controller.updateOneUser);
router.post('/login', [cors()], Controller.loginUser);



//exporto router para ser utilizado con un require//
module.exports = router;