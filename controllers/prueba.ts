import { Response , Request } from "express";
const { Usuario } = require('../models/usuario');

const obtenerPRUEBA = async(req:Request,res:Response) => {
    try{
        res.status(200).json('La prueba se ha realizado correctamente');
    } catch(err) {
        return res.status(500).json(err);
    }
};

const arrayPRUEBAS = async(req:Request,res:Response) => {
    try{
        const busqueda = await Usuario.find();
        res.status(200).json(busqueda);
    } catch(err){
        return res.status(500).json({err});
    }
};

const insertarUSUARIO = async(req:Request,res:Response) =>{
    try{
        const data = {
            nombre : req.body.nombre,
            descripcion : req.body.descripcion
        }
        const usuario = new Usuario(data);
        await usuario.save();
        res.status(200).json(usuario);
    } catch(err){
        return res.status(500).json({err});
    }
};

const borrarTODO = async(req:Request,res:Response) => {
    try{
        await Usuario.deleteMany({});
        const busqueda = await Usuario.find()
        res.status(200).json({busqueda});
    } catch(err){
        return res.status(500).json({err});
    }
};

const agregarADMIN = async(req:Request,res:Response) => {
    try {
        
        /*
        const data = {
            nombre : req.body.nombre,
            pass : bcjs.HashSync(req.body.pass,bcjs.genSaltSync(5)),
            admin : true
        }
        */
        const busqueda = await Usuario.find();
        res.status(200).json(busqueda);
    } catch(err){
        res.status(500).json({err});
    }
};



module.exports = { obtenerPRUEBA , arrayPRUEBAS , insertarUSUARIO , borrarTODO , agregarADMIN }