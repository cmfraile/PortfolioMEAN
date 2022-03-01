import express , { Application } from 'express';
const { dbC } = require('../db/configdb');
const cors = require('cors');
import fileUpload from 'express-fileupload';
import path from 'path';

class Server {

    private app:Application;
    private port:string;
    private paths:any;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.paths = {
            master:'/api/master',
            testing:'/api/',
            admin:'/api/admin',
            ntair:'/api/ntair',
            experiencia:'/api/experiencia',
            formacion:'/api/formacion',
            dinteres:'/api/dinteres',
            trabajo:'/api/trabajo',
        };
        this.middlewares();
        this.conectarDB();
        this.routes();
        //this.testing();
    }

    testing(){
        //Esto esta bien:
        console.log(path.join(__dirname,'../storage','nombretemporal.jpg'))
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.options('*',cors());
        this.app.use(fileUpload({useTempFiles:true,tempFileDir:'/tmp/',createParentPath:true}));
        //this.app.use( express.static('public') );
    }

    routes(){
        this.app.use(this.paths.master,require('../routes/master'));
        this.app.use(this.paths.testing,require('../routes/testing'));
        this.app.use(this.paths.admin,require('../routes/admin'));
        this.app.use(this.paths.ntair,require('../routes/ntair'));
        this.app.use(this.paths.experiencia,require('../routes/experiencia'));
        this.app.use(this.paths.formacion,require('../routes/formacion'));
        this.app.use(this.paths.dinteres,require('../routes/dinteres'));
        this.app.use(this.paths.trabajo,require('../routes/trabajos'));
    }

    async conectarDB(){await dbC()};

    listen(){
        this.app.listen(this.port)
    }

}

export default Server;