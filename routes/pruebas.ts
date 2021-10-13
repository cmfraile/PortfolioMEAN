import { Router } from "express";
const { body } = require('express-validator');
const { obtenerPRUEBA , arrayPRUEBAS, insertarUSUARIO , borrarTODO , agregarADMIN , login , loginestado } = require('../controllers/prueba');
const { validMaster:VM , validarJWT:vJWT } = require('../middlewares/validmaster');

const _r = Router();

_r.get('/',VM,obtenerPRUEBA);

_r.get('/arraypruebas',arrayPRUEBAS);

_r.get('/loginestado',[vJWT,VM],loginestado);

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

_r.post('/login',[
    body('usuario').not().isEmpty(),
    body('pass').not().isEmpty(),
    VM
],login)

_r.delete('/borrartodo',borrarTODO);

module.exports = _r;
