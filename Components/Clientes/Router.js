const express = require('express');
const router = express.Router();
const cors = require('cors');

const Controller = require('./Controller');




// agrego controlador para acceder a su funcionalidades//   

router.get('/one/:clienteId', [cors()], Controller.getOneClient);
router.get('/all', [cors()], Controller.getAllClients);
router.post('/', [cors()], Controller.createClients);
router.post('/login', [cors()], Controller.loginClients);
router.delete('/:clienteId', [cors()], Controller.deleteOneClient);
router.put('/:clienteId', [cors()], Controller.updateOneClient);



//exporto router para ser utilizado con un require//
module.exports = router;