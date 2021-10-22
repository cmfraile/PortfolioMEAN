import { Router } from "express";
const { validMaster:VM } = require('../middlewares/validmaster');
const { existeObj } = require('../helpers/validadoresdb');
const { validarJWT:vJWT } = require('../middlewares/validarJWT');
const { getEXPs , postEXPs , putEXPs , delEXPs } = require('../controllers/experiencia');
import * as ev from 'express-validator';

const _r = Router();

_r.get('/',getEXPs);

_r.post('/',[
    vJWT,
    ev.body('puesto').not().isEmpty(),
    ev.body('year').not().isEmpty(),
    ev.body('meses').not().isEmpty(),
    ev.body('lugar').not().isEmpty(),
    VM
],postEXPs);

_r.put('/',[
    vJWT,
    ev.body('id').isMongoId().custom( existeObj(ev.body('id'),'experiencia') ),
    VM
],putEXPs);

_r.delete('/',[
    vJWT,
    ev.body('id').isMongoId().custom( existeObj(ev.body('id'),'experiencia') ),
    VM
],delEXPs);

module.exports = _r;