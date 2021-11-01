import { Response , Request } from "express";
const { Experiencia } = require('../models/dbmodels');

const getEXPs = async(req:Request,res:Response) => {
    try{
        const consulta = await Experiencia.find().sort({year:-1});
        return res.status(200).json(consulta);
    }catch(err){return res.status(500).json(err)};
}

const postEXPs = async(req:Request,res:Response) => {
    try{
        const data = {
            puesto : req.body.puesto,
            year : req.body.year,
            meses : req.body.meses,
            lugar : req.body.lugar,
            descripcion : req.body.descripcion
        }
        const insercion = new Experiencia(data); await insercion.save();
        return res.status(201).json({msg:'Experiencia añadida a portfolio',insercion});
    }catch(err){return res.status(500).json(err)};
}

const putEXPs = async(req:Request,res:Response) => {
    try{
        const data = {
            id : req.body.id,
            puesto : req.body.puesto,
            year : req.body.year,
            meses : req.body.meses,
            lugar : req.body.lugar,
            descripcion : req.body.descripcion
        } ; const {id,...resto} = data
        const cambio = await Experiencia.findByIdAndUpdate(id,resto,{new:true});
        return res.status(200).json(cambio);
    }catch(err){return res.status(500).json(err)};
};

const delEXPs = async(req:Request,res:Response) => {
    try{
        const id = req.body.id;
        const cambio = await Experiencia.findByIdAndDelete(id,{new:true});
        return res.status(200).json(cambio);
    }catch(err){return res.status(500).json(err)};
}

module.exports = { getEXPs , postEXPs , putEXPs , delEXPs }