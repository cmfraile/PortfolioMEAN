import { Router } from "express";
const { getADMIN , crearADMIN } = require('../controllers/admin');
const { validMaster:VM } = require('../middlewares/validmaster');
import * as ev from 'express-validator';

const _r = Router();

_r.get('/',getADMIN);

_r.post('/crearADMIN',[
    ev.body('nombre').not().isEmpty(),
    ev.body('pass').not().isEmpty(),
    VM
],crearADMIN);

module.exports = _r;
