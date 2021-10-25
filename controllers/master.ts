import { Response , Request } from "express";
import { datamasterinterface } from "../models/interfaces.ref";
const { Ntair , Experiencia , Trabajo , Formacion , Dinteres } = require('../models/dbmodels');

const getMASTER = async(req:Request,res:Response) => {
    try{
        let master:datamasterinterface = {ntair:undefined,experiencia:undefined,formacion:undefined,dinteres:undefined,trabajo:undefined};
        master.ntair = await Ntair.find();
        master.experiencia = await Experiencia.find().sort({year:-1});
        master.formacion = await Formacion.find().sort({periodo:-1});
        master.dinteres = await Dinteres.find();
        master.trabajo = undefined;
        return res.status(200).json(master);
    }catch(err){console.log(err)};
}

module.exports = { getMASTER }