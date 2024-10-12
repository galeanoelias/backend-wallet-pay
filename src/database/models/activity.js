import { Schema, model } from "mongoose";


const activitySchema = new Schema(
  {
    UserAccountId: {
      type: Schema.Types.ObjectId,
      ref: "UserModel"
    },
    destinyAccountId: {
      type: Schema.Types.ObjectId,
      ref: "UserModel"
    },
    amount: {
      type: Number,
      require: true
    },
    description:{
      type:String
    },
    type:{
      type:String,
      enum:["pay","transfer", "recharge"],
      require: true
    },
    payment:{
      method:{
        type:String,
        enum:["card","balance"],
        require:false
      },
      cardId:{
        type: Schema.Types.ObjectId,
        ref: "CardModel"
      } 
    }
  },
  { timestamps: true, versionKey: false }
);

export default model("ActivityModel", activitySchema);