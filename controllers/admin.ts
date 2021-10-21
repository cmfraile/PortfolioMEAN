import { Response , Request } from "express";
const { gJWT } = require('../helpers/gJWT');
import * as bc from 'bcryptjs';
const { Admin } = require('../models/dbmodels');

const getADMIN = async(req:Request,res:Response) => {
    try{
        const admin:[any] = await Admin.find();
        if(admin.length < 1){
            return res.status(200).send('Aun no tenemos administrador');
        } else {
            return res.status(200).json({msg:'Los datos del administrador son los siguientes:',admin})
        }
    }catch(err){return res.status(500).json(err)};
}

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
            usuario : req.body.usuario,
            pass : req.body.pass
        }
        const admin = await Admin.findOne({nombre:data.usuario});
        if(!admin){return res.status(400).send('Ese administrador no existe')};
        const valida = bc.compareSync(data.pass,admin.pass);
        if(!valida){return res.status(400).send('La contraseña del administrador es incorrecta')};
        const token = await gJWT(admin.id);
        console.log(token);
        return res.status(200).json({admin,token});
    }catch(err){return res.status(500).json(err)};
}

module.exports = { getADMIN , crearADMIN , loginADMIN }