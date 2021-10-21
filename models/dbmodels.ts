import { Schema , model } from 'mongoose';
import * as interfacesPortfolio from './interfaces.ref';

const adminSchema = new Schema<interfacesPortfolio.admin>({
    nombre:{type:String,required:true},
    pass:{type:String,required:true}
},{collection : 'admin'}) ; const Admin = model<interfacesPortfolio.admin>('admin',adminSchema) ;
adminSchema.methods.toJSON = function(){
    const { nombre } = this.toObject();
    return { nombre };
};

const ntairSchema = new Schema<interfacesPortfolio.ntair>({
    nombre:{type:String,required:true},
    titulo:{type:String,required:true},
    presentacion:{type:String,required:true}
},{collection:'ntair'}) ; const Ntair = model<interfacesPortfolio.ntair>('ntair',ntairSchema);

module.exports = { Admin , Ntair };

