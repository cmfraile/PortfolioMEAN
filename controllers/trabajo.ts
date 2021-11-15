import { Response , Request } from "express";
const { Trabajo } = require('../models/dbmodels');

const getWORKs = async(req:Request,res:Response) => {
    try {
        const consulta = await Trabajo.find();
        return res.status(200).json(consulta);
    } catch(err){return res.status(500).json(err)};
}

const postWORKs = async(req:Request,res:Response) => {
    try{
        const data = {
            proyecto : req.body.proyecto,
            estado : req.body.estado,
            descripcion : req.body.descripcion,
            autor : req.body.autor,
            enlace : req.body.enlace,
            foto : req.body.fichero
        }
    } catch(err){return res.status(500).json(err)};
}

const dumbpic = async(req:Request,res:Response) => {
    try {
        const rutafichero = req.body.ruta;
        if(rutafichero == undefined){return};
        res.sendFile(rutafichero);
    } catch(err){return res.status(500).json(err)};
}



module.exports = { getWORKs }