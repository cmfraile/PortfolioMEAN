import { Router } from "express";
const { obtenerPRUEBA , arrayPRUEBAS } = require('../controllers/prueba');

const _r = Router();

_r.get('/',obtenerPRUEBA);

_r.get('/arraypruebas',arrayPRUEBAS);

module.exports = _r;
