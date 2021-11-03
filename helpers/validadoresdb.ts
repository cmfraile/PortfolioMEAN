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

const periodoCorrecto = async(periodo:[number,number|null],next:NextFunction) => {
    if(periodo[1] == null){next};
    const periodoproceso:any[] = [periodo[0],periodo[1]];
    if(periodoproceso[1] < periodoproceso[0]){throw new Error('El final del periodo no puede ser anterior a su principio')}else{next};
}

module.exports = { eEXP , eFORM , eWORK , eDIN , periodoCorrecto };