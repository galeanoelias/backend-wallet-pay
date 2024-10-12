import cardSchema from "../database/models/card.js";
import userSchema from "../database/models/user.js";

const getCard=async(req,res)=>{
const {id,user_number}=req.params;

const token = req.headers;

if (!id || !token) {
    return res
      .status(409)
      .json({ error: "El USUARIO no existe o el TOKEN no es valido" });
};


try {
    const user = await userSchema.findById({_id:id}).populate({
        path: 'cards',
        options: { strictPopulate: false }
      });
    if (!user) return false
    const userInfo = user.cards.filter(card=>card.user_number==user_number);
    res.status(200).json({userInfo})
} catch (error) {
    res.status(422).send({message:"User not found", valid:false });        
}
    
}


const createCard=async(req,res)=>{
    let {id}=req.params;
    let token = req.header;
    let {type, bank_emisor, bank, expiration_date, user_name, user_number, cvv, user_card } = req.body;
    console.log(type, bank_emisor, bank, expiration_date, user_name, user_number, cvv, user_card)
    if (!id || !token) {
        return res
          .status(409)
          .json({ error: "El USUARIO no existe o el TOKEN no es valido" });
      };
        
    
    try {
        const card= new cardSchema({    
            type,
            bank_emisor,
            bank, 
            expiration_date,
            user_card,
            user_number,
            cvv,
            id_user:id,
            user_card})
        
        await card.save()
       const user= await userSchema.findByIdAndUpdate({_id:id},{ $push: { cards: card._id } },
        { new: true });

        return res.status(200).send({message:"card Create", user});
    } catch (error) {
        console.log(error.message);
        res.status(422).send({message:"failed to create resource", valid:false });        
    }
}

const updateCard=async (req,res)=>{
    let {id}=req.params;
    let token = req.headers;
    let { type, bank_emisor, bank, expiration_date, user_name, user_number, cvv, user_card } = req.body;

    if (!id || !token) {
        return res.status(409).json({ error: "El USUARIO no existe o el TOKEN expiro" });
    }
    
    try {
    const card = await cardSchema.findById(id);
    
    if (!card) {
        return res.status(404).json({ error: "La tarjeta no existe" });
    }
    
    const updateFields = {
        type,
        bank_emisor,
        bank,
        expiration_date,
        user_name,
        user_number,
        cvv,
        user_card
    };
    
    const updatedCard = await cardSchema.findByIdAndUpdate(id, { $set: updateFields }, { new: true });
    
    return res.status(200).json({ message: "Tarjeta actualizada", card: updatedCard });
    } catch (error) {
        console.log(error.message);
        res.status(422).json({ message: "Error al actualizar la tarjeta" });
    };
};

const deleteCard=async(req,res)=>{
    let {id}=req.params;
    let token = req.headers;

    if (!id || !token) {
        return res.status(409).json({ error: "El USUARIO no existe o el TOKEN expiro" });
    }

    try {
        const deleteCard= await cardSchema.findOneAndDelete({_id:id});

        if (!deleteCard) {
            return res.status(404).json({ error: "La tarjeta no existe" });
        }


        const user = await userSchema.findByIdAndUpdate({_id: deleteCard.id_user}, {$pull: {cards: id}}, { new: true });
        return  res.status(200).json({message:"Card delete", user})
    } catch (error) {
        console.log(error);
        return res.status(500).json("failed to delete the card")
    }
}

export {getCard,createCard, updateCard, deleteCard}