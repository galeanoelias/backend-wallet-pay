import { Router } from 'express';
import { register, login } from '../controllers/auth.js';
import {  deleteUser, getAllUser, getUser, updateUser,checkUser } from '../controllers/user.js';
import { userMiddle } from '../middlewares/auth_user.js';
import { user_middleRegister } from '../middlewares/authUser.js';
import { requireToken } from '../middlewares/authToken.js';
import { validateCreateUser, validateLoginUser, validateUserByID, validateUserDelete, validateUserPatch } from '../validators/userValidator.js';
import {validationResultExpress} from '../middlewares/authValidation.js';
import {updatePass} from "../controllers/updatepass.js";


const router = Router();

router.post("/register",[ validateCreateUser, validationResultExpress ], register)

router.post("/login",[ validateLoginUser, validationResultExpress ], user_middleRegister, login)


router.get("/", getAllUser)
router.get('/check', checkUser);
router.get("/:id", [validateUserByID, validationResultExpress ], userMiddle, requireToken, getUser)

router.patch("/:id", userMiddle, requireToken, updateUser)

router.delete("/:id", [ validateUserDelete, validationResultExpress ], userMiddle, requireToken ,deleteUser)

router.patch("/updatepass/:id", userMiddle, requireToken, updatePass)


export default router;