import { Response , Request } from "express";
const { gJWT } = require('../helpers/gJWT');
import * as jwt from 'jsonwebtoken';
import * as bc from 'bcryptjs';
const { Admin } = require('../models/admin');

const getADMIN = async(req:Request,res:Response) => {
    try{
        const data = {nombre:'usuario',pass:'usuario'};
        const admin = new Admin(data);
        await admin.save();
        const busqueda = await Admin.find();
        res.status(200).json({busqueda});
       res.send('Llegas aqui');
    } catch(err){res.send(err)}
}

module.exports = { getADMIN }