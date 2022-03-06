import { Router } from "express";
const { crearADMIN , loginADMIN } = require('../controllers/admin');
const { validMaster:VM } = require('../middlewares/validadores');
import * as ev from 'express-validator';

const _r = Router();

_r.post('/login',[
    ev.body('nombre').not().isEmpty(),
    ev.body('pass').not().isEmpty(),
    VM
],loginADMIN);

module.exports = _r;