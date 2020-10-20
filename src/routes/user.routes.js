import { Router } from 'express';
const router = Router();

import * as userCtrl from '../controllers/user.controller';

//create an user
router.post('/user-add', userCtrl.createUser);

export default router;