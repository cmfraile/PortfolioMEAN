import { Schema , model } from 'mongoose';

interface Admin {nombre:string,pass:string};

const adminSchema = new Schema<Admin>({
    nombre:{type:String,required:true},
    pass:{type:String,required:true}
},{collection : 'admin'});

adminSchema.methods.toJSON = function(){
    const { _id , pass , ...admin } = this.toObject();
    return admin;
};

export const Admin = model<Admin>('admin',adminSchema);

