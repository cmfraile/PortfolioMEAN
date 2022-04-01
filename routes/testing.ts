import { Router } from "express";
const { testget } = require('../controllers/testing');

const _r = Router();

_r.get('/',testget)

module.exports = _r;
