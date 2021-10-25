import { Response , Request } from "express";
const { Dinteres } = require('../models/dbmodels');
import shuffle from "underscore";


const getDINs = async(req:Request,res:Response) => {
    try{
        const consulta = await Dinteres.find();shuffle(consulta);
        return res.status(200).json(consulta);
    }catch(err){return res.status(500).json(err)};
}

const postDINs = async(req:Request,res:Response) => {
    try{
        const data = req.body.dato;
        const insercion = new Dinteres(data) ; await insercion.save();
        return res.status(201).json({msg:"Dato de interes añadido a portfolio",insercion});
    }catch(err){return res.status(500).json(err)};
}

const putDINs = async(req:Request,res:Response) => {
    try{
        const data = {id:req.body.id,dato:req.body.dato}
        const cambio = await Dinteres.findByIdAndUpdate(data.id,data.dato,{new:true});
        return res.status(200).json(cambio);
    }catch(err){return res.status(500).json(err)};
}

const delDINs = async(req:Request,res:Response) => {
    try{
        const id = req.body.id;
        const cambio = await Dinteres.findByIdAndDelete(id,{new:true});
        return res.status(200).json(cambio);
    }catch(err){return res.status(500).json(err)};
}

module.exports = { getDINs , postDINs , putDINs , delDINs }