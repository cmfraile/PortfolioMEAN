import { Response , Request } from "express";
const { gJWT } = require('../helpers/gJWT');
import * as bc from 'bcryptjs';
const { Admin } = require('../models/dbmodels');

const crearADMIN = async(req:Request,res:Response) => {
    try{
        const admin:[any] = await Admin.find();
        if(admin.length == 1){return res.status(403).json({msg:'No se va a crear otro admin, pues ya tenemos uno',admin})};
        const data = {
            nombre : req.body.nombre,
            pass : bc.hashSync(req.body.pass,await bc.genSalt(5))
        };
        const primeradmin = new Admin(data) ; await primeradmin.save();
        return res.status(200).json({msg:'Admin creado',primeradmin});
    }catch(err){return res.status(500).json(err)};
}

const loginADMIN = async(req:Request,res:Response) => {
    try{
        const data = {
            nombre : req.body.nombre,
            pass : req.body.pass
        }
        const admin = await Admin.findOne({nombre:data.nombre});
        if(!admin){return res.status(400).send('Ese administrador no existe')};
        const valida = bc.compareSync(data.pass,admin.pass);
        if(!valida){return res.status(400).send('La contraseña del administrador es incorrecta')};
        const token = await gJWT(admin.id);
        res.status(200).json({admin,token});
    }catch(err){return res.status(500).json(err)};
}

module.exports = { crearADMIN , loginADMIN }