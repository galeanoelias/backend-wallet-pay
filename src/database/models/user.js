import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
    },
    alias: {
      type: String,
      unique: true
    },
    cvu: {
      type: String,
      unique: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    urlProfile: {
      secure_url: String,
      public_id: String
    },
    dni: {
      type: Number,
      unique: true
    },
    fullname: {
      type: String,
      required: false
    },
    phone: {
      type: Number
    },
    address: {
      type: String
    },
    balance: {
      type: Number
    },
    cards: [
      {
        type: Schema.Types.ObjectId,
        ref: "CardModel"
      }
    ]
  },
  { timestamps: true, versionKey: false }
);

export default model("UserModel", userSchema);
