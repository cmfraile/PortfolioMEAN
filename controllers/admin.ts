import { Response , Request } from "express";
const { gJWT } = require('../helpers/gJWT');
import * as jwt from 'jsonwebtoken';
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

module.exports = { getADMIN , crearADMIN }