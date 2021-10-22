import { Response , Request } from "express";
import * as bc from 'bcryptjs';
const { Experiencia } = require('../models/dbmodels');

const getEXPs = async(req:Request,res:Response) => {
    try{}catch(err){return res.status(500).json(err)};
}

const postEXPs = async(req:Request,res:Response) => {
    try{}catch(err){return res.status(500).json(err)};
}

const putEXPs = async(req:Request,res:Response) => {
    try{}catch(err){return res.status(500).json(err)};
}

const delEXPs = async(req:Request,res:Response) => {
    try{}catch(err){return res.status(500).json(err)};
}

module.exports = { getEXPs , postEXPs , putEXPs , delEXPs }