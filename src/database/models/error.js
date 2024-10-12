import { Schema, model } from "mongoose";

const errorSchema = new Schema(
{
  timestamp: { 
    type: Date, 
    default: Date.now 
    },
  message: { 
    type: String, 
    required: true 
},
  stackTrace: { 
    type: String 
},
});



export default model("ErrorModel", errorSchema);