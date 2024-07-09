import { model, Schema ,Types} from "mongoose";

const eventschema = new Schema({
      Name:{type: String},
      Description:{type:String},
      CollegeId:{type:String, type:Types.ObjectId , },
      Location:{type:String},
      Date:{type:Date},
      Tags:{type:String},
      Type:{type:String,enum: ['online', 'offline']},
      Banner:{type:String},
      cratedBy:{required:true,type:Types.ObjectId , ref:'User'}

},{
    timestamps:true,
})







export const eventModel = model('event', eventschema)