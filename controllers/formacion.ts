import { Response , Request } from "express";
const { Formacion } = require('../models/dbmodels');

const getFORMs = async(req:Request,res:Response) => {
    try{
        const consulta = await Formacion.find().sort({periodo:-1});
        return res.status(200).json(consulta);
    }catch(err){return res.status(500).json(err)};
}

const postFORMs = async(req:Request,res:Response) => {
    try{
        const data = {
            materia : req.body.materia,
            periodo : req.body.periodo,
            institucion : req.body.institucion,
        }
    const insercion = new Formacion(data) ; await insercion.save();
    return res.status(201).json({msg:"Formación añadida al portfolio",insercion});
    }catch(err){return res.status(500).json(err)};
}

const putFORMs = async(req:Request,res:Response) => {
    try{
        const data = {
            id : req.body.id,
            materia : req.body.materia,
            periodo : req.body.periodo,
            institucion : req.body.institucion
        } ; const {id,...resto} = data;
        const cambio = await Formacion.findByIdAndUpdate(id,resto,{new:true});
        return res.status(200).json(cambio);
    }catch(err){return res.status(500).json(err)};
}

const delFORMs = async(req:Request,res:Response) => {
    try{
        const id = req.body.id;
        const cambio = await Formacion.findByIdAndDelete(id,{new:true});
        return res.status(200).json(cambio);
    }catch(err){return res.status(500).json(err)};
}

module.exports = { getFORMs , postFORMs , putFORMs , delFORMs }