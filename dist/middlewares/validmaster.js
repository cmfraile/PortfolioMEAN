"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validationResult = require('express-validator').validationResult;
var validMaster = function (req, res, next) {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    ;
    next();
};
module.exports = { validMaster: validMaster };
//# sourceMappingURL=validmaster.js.map