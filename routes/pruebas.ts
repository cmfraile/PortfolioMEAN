import { Router } from "express";
const { obtenerPRUEBA , arrayPRUEBAS } = require('../controllers/prueba');
const { validMaster:VM } = require('../middlewares/validmaster');

const _r = Router();

_r.get('/',VM,obtenerPRUEBA);

_r.get('/arraypruebas',VM,arrayPRUEBAS);

module.exports = _r;
