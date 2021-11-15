import { Response , Request } from "express";
const { Trabajo } = require('../models/dbmodels');
const { uploadfile:uf , delfile:df } = require('../helpers/movefiles');

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
            foto : req.body.fichero,
            //ruta:
        }
        //guardar el await de uploafile en variable
        //crear instancia del modelo de la BBDD y guardarla.
        //retornar respeuesta
    } catch(err){return res.status(500).json(err)};
}

const postWORKsTEST = async(req:Request,res:Response) => {
    try{
        let data = {
            proyecto : req.body.proyecto,
            estado : req.body.estado,
            descripcion : req.body.descripcion,
            autor : req.body.autor,
            enlace : req.body.enlace,
            foto : req.body.fichero,
            ruta: ""
        }; data.ruta = await uf(data.foto);
    return res.status(200).json(data);
    }catch(err){return res.status(500).json(err)};
}

const delWORK = async(req:Request,res:Response) => {
    let aborrar = await Trabajo.findByIdAndDelete(req.params.id);
    if(aborrar !== null){
        await df(aborrar.ruta);
        return res.status(200).json(aborrar);
    } else {
        return res.status(200).json(aborrar);
    }
    
}

const dumbpic = async(req:Request,res:Response) => {
    try {
        const rutafichero = req.body.ruta;
        if(rutafichero == undefined){return};
        res.sendFile(rutafichero);
    } catch(err){return res.status(500).json(err)};
}



module.exports = { getWORKs , postWORKs , postWORKsTEST , dumbpic }