import userSchema from "../database/models/user.js";
import ActivityModel from "../database/models/activity.js";

const addMoney=async(req,res)=>{

    const {id}=req.params;
    
    const {cardNumber, cvv,balance}=req.body;
    console.log(id);
    try{
    const user= await userSchema.findById({_id:id}).populate({
        path: 'cards',
        match: { id_user: id },
        options: { strictPopulate: false }
      });

    const card= user.cards.filter((cards)=> cards.user_number== cardNumber);

    if(balance <= 0){
        return res.status(500).send({message:"El balance no puede ser negativo",valid:false})
    };
    if(!user){
        return res.status(404).send({message:"usuario no registrado",valid:false})
    };
    
    if(cardNumber!==card[0].user_number||cvv !== card[0].cvv ){
        return res.status(404).send({message:"Los datos de la tarjeta no son correctos",valid:false})
    };

    const update= await userSchema.findByIdAndUpdate({_id:id},{balance:user.balance + balance},{new:true});
    
    const activity = new ActivityModel({
        UserAccountId: id,
        destinyAccountId: id,
        amount:balance,
        type: "recharge",
        payment: {
          method: "card",
          cardId:card[0]._id,
        }
      });
    
    const dataOperation = await activity.save();
    res.status(200).send({status:"aproved", mount:balance, operationNumber:dataOperation._id,dataOperation})
    }catch(error){
        res.status(500).send({message:"error no se pudo realizar la recarga"})
        console.log(error);

    };
} 




export  {addMoney}