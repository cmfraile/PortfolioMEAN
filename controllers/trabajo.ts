import { Response , Request } from "express";
const { Trabajo } = require('../models/dbmodels');
const { uploadfile:uf , delfile:df } = require('../helpers/movefiles');

const dumbcall:string = `${process.env.ENVIROMENT}/api/crudimg/gdp/`

const getWORKs = async(req:Request,res:Response) => {
    try {
        const consulta = await Trabajo.find();
        for(let dato in consulta){const rutablanda = consulta[dato].foto;consulta[dato].foto = `${dumbcall}${rutablanda}`};
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
        } ; data.foto = await uf(data.foto) ;
        const nuevocurro = new Trabajo(data) ; await nuevocurro.save();
        return res.status(200).json({msg:"nuevo curro subido",nuevocurro});
    } catch(err){return res.status(500).json(err)};
}

const postWORKsTEST = async(req:Request,res:Response) => {
    try{
        const { body:cuerpo , files:ficheros } = req
        return res.status(200).json({cuerpo,ficheros});
    }catch(err){return res.status(500).json({err})};
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