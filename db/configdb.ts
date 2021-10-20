import { connect as MonConnect, ConnectOptions } from "mongoose";
const mongoose = require('mongoose');

const dbC = async() => {
    try{
        const options:ConnectOptions = {
            user:'usuario',
            pass:'usuario',
            dbName:'BDP',
        }
        await MonConnect('mongodb://localhost:27017/BDP',options,(err) => {console.log(err)});
        //console.log('Estamos correctamente conectados a la base de datos.')
    }catch(err){console.log(err);throw new Error('No se logro establecer la conexión')};
}

module.exports = { dbC };