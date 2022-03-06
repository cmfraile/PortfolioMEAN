import { Response , Request } from "express";
const { gJWT } = require('../helpers/gJWT');
import * as bc from 'bcryptjs';
const { Admin } = require('../models/dbmodels');

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

module.exports = { loginADMIN }