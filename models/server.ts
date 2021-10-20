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
            admin: '/api/admin',
            testing: '/api/testing'
        };
        this.middlewares();
        this.conectarDB();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        //this.app.use( express.static('public') );
    }

    routes(){
        this.app.use(this.paths.admin,require('../routes/admin'));
        this.app.use(this.paths.testing,require('../routes/testing'));
    }

    async conectarDB(){await dbC()};

    listen(){
        this.app.listen(this.port, () => {
            console.log(`SERVIDOR CORRIENDO EN DESARROLLO`);
        })
    }

}

export default Server;