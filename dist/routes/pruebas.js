"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var _a = require('../controllers/prueba'), obtenerPRUEBA = _a.obtenerPRUEBA, arrayPRUEBAS = _a.arrayPRUEBAS;
var _r = (0, express_1.Router)();
_r.get('/', obtenerPRUEBA);
_r.get('/arraypruebas', arrayPRUEBAS);
module.exports = _r;
//# sourceMappingURL=pruebas.js.map