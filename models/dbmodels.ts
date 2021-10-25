import { Schema , model } from 'mongoose';
import * as interfacesPortfolio from './interfaces.ref';

const adminSchema = new Schema<interfacesPortfolio.admin>({
    nombre:{type:String,required:true},
    pass:{type:String,required:true}
},{collection : 'admin'});const Admin = model<interfacesPortfolio.admin>('admin',adminSchema);

/*
adminSchema.methods.toJSON = function(){
    const { nombre } = this.toObject();
    return { nombre };
};
*/

const ntairSchema = new Schema<interfacesPortfolio.ntair>({
    nombre:{type:String,required:true},
    titulo:{type:String,required:true},
    presentacion:{type:String,required:true}
},{collection:'ntair'});const Ntair = model<interfacesPortfolio.ntair>('ntair',ntairSchema);

const experienciaSchema = new Schema<interfacesPortfolio.experiencia>({
    puesto:{type:String,required:true},
    year:{type:Number,required:true},
    meses:{type:Number,required:true},
    lugar:{type:String,required:true}
},{collection:'experiencia'});const Experiencia = model<interfacesPortfolio.experiencia>('experiencia',experienciaSchema);

const formacionSchema = new Schema<interfacesPortfolio.formacion>({
    materia:{type:String,required:true},
    periodo:{type:[Number,Number||null],required:true},
    institucion:{type:String,required:true}
},{collection:'formacion'});const Formacion = model<interfacesPortfolio.formacion>('formacion',formacionSchema);

const dinteresSchema = new Schema<interfacesPortfolio.dinteres>({
    dato:{type:String,required:true}
},{collection:'dinteres'});const Dinteres = model<interfacesPortfolio.dinteres>('dinteres',dinteresSchema);

const trabajoSchema = new Schema<interfacesPortfolio.trabajo>({
    foto:{type:String,required:false},
    proyecto:{type:String,required:true},
    estado:{type:String,required:false},
    descripcion:{type:String,required:true},
    autor:{type:String,required:true},
    enlace:{type:String,required:false}
},{collection:'trabajo'});const Trabajo = model<interfacesPortfolio.trabajo>('trabajos',trabajoSchema);

module.exports = { Admin , Ntair , Experiencia , Trabajo , Formacion , Dinteres };

