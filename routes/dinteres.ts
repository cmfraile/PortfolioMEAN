import { Router } from "express";
const { validMaster:VM } = require('../middlewares/validmaster');
const { eDIN } = require('../helpers/validadoresdb');
const { validarJWT:vJWT } = require('../middlewares/validarJWT');
const { getDINs , postDINs , putDINs , delDINs } = require('../controllers/dinteres');
import * as ev from 'express-validator';

const _r = Router();

_r.get('/',[],);

_r.post('/',[],);

_r.put('/',[],);

_r.delete('/',[],);

module.exports = _r