import {Router} from 'express';
import {getActivities, recentClients, transfer} from '../controllers/activity.js';
import { userMiddle } from '../middlewares/auth_user.js';
import { requireToken } from '../middlewares/authToken.js';

const router = Router();

router.post("/transfer", userMiddle, requireToken, transfer)
router.get("/activities/:id/:amount?", userMiddle, requireToken, getActivities);
router.get("/recent/:id/:amount?", userMiddle, requireToken, recentClients);


export default router;