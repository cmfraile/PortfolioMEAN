import { Router } from "express";
const { validMaster:VM } = require('../middlewares/validmaster');
const { eDIN } = require('../helpers/validadoresdb');
const { validarJWT:vJWT } = require('../middlewares/validarJWT');
const { getDINs , postDINs , putDINs , delDINs } = require('../controllers/dinteres');
import * as ev from 'express-validator';

const _r = Router();

_r.get('/',getDINs);

_r.post('/',[
    vJWT,
    ev.body('dato').not().isEmpty(),
    VM
],postDINs);

_r.put('/',[
    vJWT,
    ev.body('id').isMongoId(),
    ev.body('id').custom(eDIN),
    VM
],putDINs);

_r.delete('/',[
    vJWT,
    ev.header('id').isMongoId(),
    ev.header('id').custom(eDIN),
    VM
],delDINs);

module.exports = _r