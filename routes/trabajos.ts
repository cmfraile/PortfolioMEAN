import { Router } from "express";
import * as ev from 'express-validator';
const { getWORKs , postWORKs , dumbpic , putWORK , delWORK } = require('../controllers/trabajo');
const { validarJWT:vJWT } = require('../middlewares/validarJWT');
const { validMaster:VM } = require('../middlewares/validadores');
const { eWORK } = require('../helpers/validadoresdb');
const { validFile , validRoute } = require('../middlewares/validadores');

const _r = Router();

_r.get('/',getWORKs);

_r.get('/gdp/:ruta',[
    ev.param('ruta').not().isEmpty(),
    validRoute,
    VM
],dumbpic);

_r.post('/',[
    vJWT,
    validFile,
    ev.body('proyecto').not().isEmpty(),
    ev.body('descripcion').not().isEmpty(),
    ev.body('autor').not().isEmpty(),
    VM
],postWORKs);

_r.put('/',[
    vJWT,
    ev.body('proyecto').not().isEmpty(),
    ev.body('descripcion').not().isEmpty(),
    ev.body('autor').not().isEmpty(),
    VM
],putWORK);

_r.delete('/',[
    vJWT,
    ev.header('id').not().isEmpty(),
    ev.header('id').custom( eWORK ),
    VM
],delWORK)

module.exports = _r