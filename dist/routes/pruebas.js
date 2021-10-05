"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var obtenerPRUEBA = require('../controllers/prueba').obtenerPRUEBA;
var _r = (0, express_1.Router)();
_r.get('/', obtenerPRUEBA);
module.exports = _r;
//# sourceMappingURL=pruebas.js.map