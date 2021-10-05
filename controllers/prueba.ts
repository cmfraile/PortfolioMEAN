import { Response } from "express";


const obtenerPRUEBA = async(req:Request,res:Response) => {
    try{
        res.status(200).json('La prueba se ha realizado correctamente');
    }
}

module.exports = { obtenerPRUEBA }