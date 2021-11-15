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
    ev.body('proyecto').not().isEmpty(),
    ev.body('estado').not().isEmpty(),
    ev.body('descripcion').not().isEmpty(),
    ev.body('autor').not().isEmpty(),
    ev.body('enlace').not().isEmpty(),
    VM
],postWORKs);

_r.post('/pwt',[
    ev.body('foto').not().isEmpty(),
    ev.body('proyecto').not().isEmpty(),
    ev.body('estado').not().isEmpty(),
    ev.body('descripcion').not().isEmpty(),
    ev.body('autor').not().isEmpty(),
    ev.body('enlace').not().isEmpty(),
    VM
],postWORKsTEST);

_r.delete('/:id',[
    ev.param('id').not().isEmpty(),
    ev.param('id').custom( validate )
],)

module.exports = _r