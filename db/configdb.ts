import { connect as MonConnect, ConnectOptions } from "mongoose";
const mongoose = require('mongoose');

const dbC = async() => {
    console.log(process.env);
    try{
        const options:ConnectOptions = {
            user:process.env.UDB,
            pass:process.env.PDB,
            dbName:'BDP',
        }
        await MonConnect(`mongodb://${process.env.DBIP}/${options.dbName}`,options,(err) => {console.log(err)});
        //await MonConnect(`mongodb://${process.env.BDIP}/${options.dbName}`,options,(err) => {console.log(err)});
        //console.log('Estamos correctamente conectados a la base de datos.')
    }catch(err){console.log(err);throw new Error('No se logro establecer la conexión')};
}

module.exports = { dbC };