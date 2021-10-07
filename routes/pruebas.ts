import { Router } from "express";
const { body } = require('express-validator');
const { obtenerPRUEBA , arrayPRUEBAS, insertarUSUARIO } = require('../controllers/prueba');
const { validMaster:VM } = require('../middlewares/validmaster');

const _r = Router();

_r.get('/',VM,obtenerPRUEBA);

_r.get('/arraypruebas',VM,arrayPRUEBAS);

_r.post('/',insertarUSUARIO);

module.exports = _r;
