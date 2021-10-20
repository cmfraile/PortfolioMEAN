import { connect as MonConnect } from "mongoose";

const dbC = async() => {
    try{
        MonConnect('mongodb://localhost:27017/BDPortfolio',{user:'usuario',pass:'usuario'},(err) => {console.log});
        console.log('Estamos correctamente conectados a la base de datos.')
    }catch(err){console.log(err);throw new Error('No se logro establecer la conexión')};
}

module.exports = { dbC };