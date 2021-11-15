import { Router } from "express";
import * as ev from 'express-validator';
const { getWORKs , postWORKs , postWORKsTEST , dumbpic } = require('../controllers/trabajo');
const { validMaster:VM } = require('../middlewares/validmaster');
const { validFile , validRoute } = require('../middlewares/validfiles');
import { validate } from "uuid";

const _r = Router();

_r.get('/',getWORKs);

_r.get('/gdp/:ruta',[
    ev.param('ruta').not().isEmpty(),
    validRoute,
    VM
],dumbpic);

_r.post('/',[
    validFile,
    VM
],postWORKs);

_r.post('/pwt',[
    validFile,
    VM
],postWORKsTEST);

_r.delete('/:id',[
    ev.param('id').not().isEmpty(),
    ev.param('id').custom( validate )
],)

module.exports = _r