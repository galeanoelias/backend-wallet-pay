import { Schema, model } from "mongoose";


const cardSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["credit", "debit"]
    },
    bank_emisor: {
      type: String,
      required: true
    },
    bank: {
      type: String,
      enum: ["mastercard", "visa"],
      required: true
    },
    expiration_date: {
      type: String,
      required: true
    },
    user_card: {
      type: String,
      required: false
    },
    user_number: {
      type: Number,
      required: true
    },
    cvv: {
      type: Number,
      required: true
    },
    id_user: [
      {
        type: Schema.Types.ObjectId,
        ref: "UserModel"
      },
      /*
      status:{
      type: Boolean,
      required: true
    }
    */
    ]
  },
  { timestamps: true, versionKey: false }
);

export default model("CardModel", cardSchema);
