import { Response , Request } from "express";

const obtenerPRUEBA = async(req:Request,res:Response) => {
    try{
        res.status(200).json('La prueba se ha realizado correctamente');
    } catch(err) {
        return res.status(500).json(err);
    }
}

const arrayPRUEBAS = async(req:Request,res:Response) => {
    
    const usuariostest:any = [
        {
            nombre: 'Prueba numero 1',
            foto: 'https://picsum.photos/200',
            descripcion: 'Descripción del primer objeto'
        },
        {
            nombre: 'Prueba numero 2',
            foto: 'https://picsum.photos/200',
            descripcion: 'Descripción del segundo objeto'
        },
        {
            nombre: 'Prueba numero 3',
            foto: 'https://picsum.photos/200',
            descripcion: 'Descripción del tercer objeto'
        },
    ]
    
    try{
        res.status(200).json(usuariostest);
    } catch(err){
        return res.status(500).json(err);
    }
}



module.exports = { obtenerPRUEBA , arrayPRUEBAS }