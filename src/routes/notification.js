import {Router} from 'express';
import { getNotificationsById } from '../controllers/notification.js';


const router = Router();

router.post("/notifications",getNotificationsById)



export default router;