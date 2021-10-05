import { Router } from "express";
const { validMaster:VM } = require('../middlewares');

const _r = Router();

_r.get('/',VM,obtenerPRUEBA);
