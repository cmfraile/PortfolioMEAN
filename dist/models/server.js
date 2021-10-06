"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        this.paths = {
            pruebas: '/api/pruebas'
        };
        this.middlewares();
        this.routes();
    }
    Server.prototype.middlewares = function () {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        //this.app.use( express.static('public') );
    };
    Server.prototype.routes = function () {
        this.app.use(this.paths.pruebas, require('../routes/pruebas'));
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("Servidor corriendo en puerto " + _this.port);
            console.log("tsc --watch && nodemon dist/app.js &&");
        });
    };
    return Server;
}());
exports.default = Server;
//# sourceMappingURL=server.js.map