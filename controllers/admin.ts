import { Response , Request } from "express";
const { gJWT } = require('../helpers/gJWT');
import * as jwt from 'jsonwebtoken';
import * as bc from 'bcryptjs';
import { Admin } from "../models/usuario";

const getADMIN = async(req:Request,res:Response) => {
    try{
        //const busqueda = await Admin.find();
        return res.send('llegas aqui');
    } catch(err){res.send(err)}
}

module.exports = { getADMIN }