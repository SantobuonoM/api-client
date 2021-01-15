const express = require('express');
const router = express.Router();
const cors = require('cors');
const { verificaToken } = require('./../Middlewares/Autenticacion')

const Controller = require('./Controller');




// agrego controlador para acceder a su funcionalidades//   

router.get('/one/:clienteId', [cors(), verificaToken], Controller.getOneClient);
router.get('/all', [cors(), verificaToken], Controller.getAllClients);
router.post('/', [cors(), verificaToken], Controller.createClients);
router.post('/login', [cors()], Controller.loginClients);
router.delete('/:clienteId', [cors(), verificaToken], Controller.deleteOneClient);
router.put('/:clienteId', [cors(), verificaToken], Controller.updateOneClient);



//exporto router para ser utilizado con un require//
module.exports = router;