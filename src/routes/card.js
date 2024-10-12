import { Router } from "express";
import { createCard, deleteCard, getCard, updateCard } from "../controllers/card.js";
//import { validateCardByID, validateCardCreate, validateCardDelete, validateCardUpdate } from "../validators/cardValidators.js";
//import { validationResultExpress } from "../middlewares/authValidation.js";
import { userMiddle } from '../middlewares/auth_user.js';
import { requireToken } from '../middlewares/authToken.js';

const router=Router()

router.get("/:id/:user_number", userMiddle, requireToken, getCard);


router.post("/:id", /*[ validateCardCreate, validationResultExpress ],*/ userMiddle, requireToken, createCard)
router.patch("/:id", /*[validateCardUpdate], validationResultExpress,*/ userMiddle, requireToken, updateCard)
router.delete("/:id", /*[validateCardDelete], validationResultExpress,*/ userMiddle, requireToken, deleteCard)


export default router