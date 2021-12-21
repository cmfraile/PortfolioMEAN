import { Response , Request } from "express";
const { Trabajo } = require('../models/dbmodels');
const { uploadfile:uf , delfile:df } = require('../helpers/movefiles');

const dumbcall:string = `${process.env.ENVIROMENT}/api/trabajo/gdp/`

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
    let aborrar = await Trabajo.findByIdAndDelete(req.headers.id);
    if(aborrar !== null){
        await df(aborrar.foto);
        return res.status(200).json(aborrar);
    } else {
        return res.status(200).json(aborrar);
    }
}

const putWORK = async(req:Request,res:Response) => {
    try{
        const foto = req.files?.foto || null;
        const data = {
            id : req.body.id,
            foto,
            proyecto : req.body.proyecto,
            descripcion : req.body.descripcion,
            estado : req.body.estado,
            autor : req.body.autor,
            enlace : req.body.enlace
        };
        if(data.foto == null){
            const {id,foto,...resto} = data;
            const cambio = await Trabajo.findByIdAndUpdate(id,resto,{new:true});
            return res.status(200).json(cambio);
        }
        if(data.foto !== null){
            const cambio = await Trabajo.findById(data.id);
            await df(cambio.foto);
            const {id,...resto} = data;
            resto.foto = await uf(resto.foto);
            const cambio2 = await Trabajo.findByIdAndUpdate(id,resto,{new:true});
            return res.status(200).json(cambio);
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



module.exports = { getWORKs , postWORKs , postWORKsTEST , dumbpic , putWORK , delWORK }