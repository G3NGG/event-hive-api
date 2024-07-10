import { Schema, model } from "mongoose";

const userSchema = new Schema({
    Name:{type:String, required:true},
    userName:{type:String, required:true, unique:true},
    Email:{type:String,required:true, unique:true},
    Password:{type:String,required:true},
    Image:{type:String}
},{
    timestamps:true
})


export const userModel = model('user', userSchema)