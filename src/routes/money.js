import { Router } from "express";
import { userMiddle } from '../middlewares/auth_user.js';
import { requireToken } from '../middlewares/authToken.js';
import { addMoney } from "../controllers/money.js";
const router=Router()

router.post("/:id", userMiddle, requireToken, addMoney)

export default router