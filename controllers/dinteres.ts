import { Response , Request } from "express";
const { Dinteres } = require('../models/dbmodels');

const getDINs = async(req:Request,res:Response) => {
    try{
        const consulta = await Dinteres.find();
    }catch(err){return res.status(500).json(err)};
}

const postDINs = async(req:Request,res:Response) => {
    try{}catch(err){return res.status(500).json(err)};
}

const putDINs = async(req:Request,res:Response) => {
    try{}catch(err){return res.status(500).json(err)};
}

const delDINs = async(req:Request,res:Response) => {
    try{}catch(err){return res.status(500).json(err)};
}

module.exports = { getDINs , postDINs , putDINs , delDINs }