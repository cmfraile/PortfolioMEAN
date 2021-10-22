const { Experiencia , Trabajo , Formacion } = require('../models/dbmodels');

const existeObj = async(id:string = "",tipobj:string) => {
    switch(tipobj){
        case 'experiencia':
            const eEXP = await Experiencia.findByID(id);
            if(!eEXP){throw new Error('Ese objeto de experiencia no existe')};
        break;
        case 'formacion':
            const eFORM = await Formacion.findByID(id);
            if(!eFORM){throw new Error('Ese objeto de formacion no existe')};
        break;
        case 'trabajos':
            const eWORK = await Trabajo.findByID(id);
            if (!eWORK){throw new Error('Ese objeto de trabajo no existe')};
        break;
        default:
            throw new Error(`Metiste la gamba metiendo como tipobj "${tipobj}" mi rey`);
    }
    //Esto es next en mi barrio:
    return true;
}