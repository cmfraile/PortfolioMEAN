import { Router } from "express";
const { validMaster:VM } = require('../middlewares/validmaster');
const { eFORM , periodoCorrecto } = require('../helpers/validadoresdb');
const { validarJWT:vJWT } = require('../middlewares/validarJWT');
const { getFORMs , postFORMs , putFORMs , delFORMs } = require('../controllers/formacion');
import * as ev from 'express-validator';

const _r = Router();

_r.get('/',getFORMs);

_r.post('/',[
    vJWT,
    ev.body('materia').not().isEmpty(),
    ev.body('periodo').not().isEmpty(),
    ev.body('periodo').custom(periodoCorrecto),
    ev.body('institucion').not().isEmpty(),
    VM
],postFORMs);

_r.put('/',[
    vJWT,
    ev.body('id').isMongoId(),
    ev.body('id').custom(eFORM),
    VM
],putFORMs);

_r.delete('/',[
    vJWT,
    ev.body('id').isMongoId(),
    ev.body('id').custom(eFORM),
    VM
],delFORMs);

module.exports = _r