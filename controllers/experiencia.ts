import { Response , Request } from "express";
import * as bc from 'bcryptjs';
const { Experiencia } = require('../models/dbmodels');

const getEXPs = async(req:Request,res:Response) => {
    try{
        const consulta = await Experiencia.find();
        return res.status(200).json(consulta);
    }catch(err){return res.status(500).json(err)};
}

const postEXPs = async(req:Request,res:Response) => {
    try{
        const data = {
            puesto : req.body.puesto,
            year : req.body.year,
            meses : req.body.meses,
            lugar : req.body.lugar
        }
        const insercion = new Experiencia(data); await insercion.save();
        return res.status(201).json({msg:'Experiencia añadida a portfolio',insercion});
    }catch(err){return res.status(500).json(err)};
}

const putEXPs = async(req:Request,res:Response) => {
    try{
        return res.send('Implantandolo');
    }catch(err){return res.status(500).json(err)};
}

const delEXPs = async(req:Request,res:Response) => {
    try{
        return res.send('Implantandolo');
    }catch(err){return res.status(500).json(err)};
}

module.exports = { getEXPs , postEXPs , putEXPs , delEXPs }