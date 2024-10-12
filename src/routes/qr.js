import { Router } from "express";
import { sendQr } from "../controllers/qr.js";
import { requireToken } from '../middlewares/authToken.js';
import { userMiddle } from '../middlewares/auth_user.js';
const router=Router()

router.get("/:alias/:mount", userMiddle, requireToken, sendQr)


export default router
