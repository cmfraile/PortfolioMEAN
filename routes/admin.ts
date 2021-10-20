import { Router } from "express";
const { getADMIN } = require('../controllers/administrador');

const _r = Router();

_r.get('/',getADMIN)

module.exports = _r;
