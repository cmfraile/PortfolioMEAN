import express , { Application } from 'express';
import cors from 'cors';
const { dbC } = require('../db/configdb');

class Server {

    private app:Application;
    private port:string;
    private paths:any;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.paths = {
            pruebas:    '/api/pruebas'
        };
        this.middlewares();
        this.conectarDB();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use(this.paths.pruebas,require('../routes/pruebas'));
    }

    async conectarDB(){await dbC()};

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
            console.log("tsc --watch && nodemon dist/app.js &&");
        })
    }

}

export default Server;