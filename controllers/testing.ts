import { Response , Request } from "express";

const testget = async(req:Request,res:Response) => {
    try{
        const cuerpo = req.body;
        res.status(200).json({msg:'El endpoint funciona correctamente',cuerpo});
    }catch(err){return res.status(500).json(err)};
}

module.exports = { testget };