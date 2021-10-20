import { Router } from "express";
const { getADMIN } = require('../controllers/admin');

const _r = Router();

_r.get('/',getADMIN);

module.exports = _r;
