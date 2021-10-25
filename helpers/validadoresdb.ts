const { Experiencia , Trabajo , Formacion , Dinteres } = require('../models/dbmodels');
import { NextFunction } from "express";

const eEXP = async(id:string="",next:NextFunction) => {
    const eEXP = await Experiencia.findById(id);
    if(!eEXP){throw new Error('Ese objeto de experiencia no existe')};
    next;
}

const eFORM = async(id:string="",next:NextFunction) => {
    const eFORM = await Formacion.findById(id);
    if(!eFORM){throw new Error('Ese objeto de experiencia no existe')};
    next;
}

const eDIN = async(id:string="",next:NextFunction) => {
    const eDIN = await Dinteres.findById(id);
    if(!eDIN){throw new Error('Ese objeto de dato de interes no existe')};
    next;
}

const eWORK = async(id:string="",next:NextFunction) => {
    const eWORK = await Trabajo.findById(id);
    if(!eWORK){throw new Error('Ese objeto de experiencia no existe')};
    next;
}

module.exports = { eEXP , eFORM , eWORK , eDIN };