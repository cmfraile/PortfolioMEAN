import { Schema , model } from 'mongoose';

interface Usuario { nombre:string, foto:string, descripcion:string };

const usuarioSchema = new Schema<Usuario>({
    nombre:{type:String,required:true},
    foto:{type:String,required:false,default:'https://picsum.photos/200'},
    descripcion:{type:String,required:false}
},{ collection : 'usuarios' });

const Usuario = model<Usuario>('Usuario',usuarioSchema);

module.exports = { Usuario }