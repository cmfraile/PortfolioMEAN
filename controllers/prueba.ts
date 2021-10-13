import { Response , Request } from "express";
const { Usuario } = require('../models/usuario');
const { gJWT } = require('../helpers/gJWT');
import * as bc from 'bcryptjs';

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
            descripcion : req.body.descripcion,
            admin : false
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
        const data = {
            nombre : req.body.usuario,
            pass : bc.hashSync(req.body.pass,await bc.genSalt(5)),
            admin : true
        };
        const busqueda = await Usuario.find({admin:true});
        if(busqueda.length == 1){return res.status(403).json({msg:'El admin ya existe',busqueda})};
        const usuario = new Usuario(data) ; usuario.save();
        res.status(200).json({msg:'EL ADMIN;',usuario});
    } catch(err){
        res.status(500).json({err});
    }
};

const login = async(req:Request,res:Response) => {
    try {
        const data = {
            usuario : req.body.usuario,
            pass : req.body.pass
        }
        const usuario = await Usuario.findOne({nombre:data.usuario});
        if(!usuario){return res.status(400).json({msg:'USUARIO/contraseña incorrectos'})};
        const valida = bc.compareSync(data.pass,usuario.pass);
        if(!valida){return res.status(400).json({msg:'Usuario/CONTRASEÑA incorrectos'})};
        const token = await gJWT(usuario.id);
        res.status(200).json({usuario,token});
    } catch(err){
        res.status(500).json(err);
    }

}

const loginestado = async(req:Request,res:Response) => {
    try{
        res.status(400).json('Todo gucci');
    } catch(err){
        res.status(500).json('FUCK');
    }
};



module.exports = { obtenerPRUEBA , arrayPRUEBAS , insertarUSUARIO , borrarTODO , agregarADMIN , login , loginestado }