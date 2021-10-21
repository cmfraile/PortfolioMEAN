import { Router } from "express";
const { ntairGET , ntairPOST } = require('../controllers/ntair');
const { validMaster:VM , validarJWT:vJWT } = require('../middlewares/validmaster');
import * as ev from 'express-validator';

const _r = Router();


_r.get('/',ntairGET);

_r.post('/',[
    vJWT,
    ev.body('nombre').not().isEmpty(),
    ev.body('titulo').not().isEmpty(),
    ev.body('presentacion').not().isEmpty(),
    VM
],ntairPOST);


module.exports = _r;