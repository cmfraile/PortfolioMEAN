import { Router } from "express";
const { body } = require('express-validator');
const { obtenerPRUEBA , arrayPRUEBAS, insertarUSUARIO , borrarTODO , agregarADMIN } = require('../controllers/prueba');
const { validMaster:VM } = require('../middlewares/validmaster');

const _r = Router();

_r.get('/',VM,obtenerPRUEBA);

_r.get('/arraypruebas',VM,arrayPRUEBAS);

_r.post('/',[
    body('nombre').not().isEmpty(),
    body('descripcion').not().isEmpty(),
    VM
],insertarUSUARIO);

_r.post('/crearadmin',[
    body('usuario').not().isEmpty(),
    body('pass').not().isEmpty(),
    VM
],agregarADMIN);

_r.delete('/borrartodo',borrarTODO);

module.exports = _r;
