import { Router } from "express";
const { obtenerPRUEBA } = require('../controllers/prueba');

const _r = Router();

_r.get('/',obtenerPRUEBA);

module.exports = _r;
