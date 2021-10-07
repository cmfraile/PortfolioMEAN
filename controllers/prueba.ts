import { Response , Request } from "express";
const { Usuario } = require('../models/usuario');

const obtenerPRUEBA = async(req:Request,res:Response) => {
    try{
        res.status(200).json('La prueba se ha realizado correctamente');
    } catch(err) {
        return res.status(500).json(err);
    }
}

const arrayPRUEBAS = async(req:Request,res:Response) => {
    try{
        const busqueda = await Usuario.find();
        res.status(200).json(busqueda);
    } catch(err){
        return res.status(500).json({err});
    }
}



module.exports = { obtenerPRUEBA , arrayPRUEBAS }