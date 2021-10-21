import { Response , Request } from "express";
const { Ntair } = require('../models/dbmodels');
const { validMaster:VM } = require('../middlewares/validmaster');
const { validarJWT:vJWT } = require('../middlewares/validarJWT');
import { ntair } from "../models/interfaces.ref";
import * as jwt from 'jsonwebtoken';


const ntairGET = async(req:Request,res:Response) => {
    try{
        const busqueda:ntair[] = await Ntair.find();
        if(!busqueda.length){return res.status(204)};
        return res.status(200).json(busqueda);
    }catch(err){return res.status(500).json(err)};
}

const ntairPOST = async(req:Request,res:Response) => {
    try{
        const data:ntair = {
            nombre:req.body.nombre,
            titulo:req.body.titulo,
            presentacion:req.body.presentacion
        };
        const busqueda:[any] = await Ntair.find();
        if(busqueda.length){await Ntair.deleteMany({})};
        const nuevontair = new Ntair(data) ; await nuevontair.save();
        const nuevabusqueda = await Ntair.find();
        res.status(200).json(nuevabusqueda);
    }catch(err){return res.status(500).json(err)};
}

module.exports = { ntairGET , ntairPOST };