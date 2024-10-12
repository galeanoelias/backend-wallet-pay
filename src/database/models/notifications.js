import { Schema, model } from "mongoose";

const notificationSchema = new Schema(
  {
    destinyAccountId: {
      type: Schema.Types.ObjectId,
      ref:'UserModel'
    },
    message: {
      type: String
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      enum:["transfer" , "profile"]
    }
  },
  { timestamps: true, versionKey: false }
);


export default model("NotificationModel", notificationSchema);
