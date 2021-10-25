import { Router } from "express";
const { getMASTER } = require('../controllers/master');

const _r = Router();

_r.get('/',getMASTER);

module.exports = _r