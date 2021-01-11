import { Router } from 'express';
const router = Router();

import * as userCtrl from '../controllers/user.controller';

//create an user
router.post('/user-add', userCtrl.createUser);
router.get('/user/get-all/', userCtrl.getUsersAll);
router.get('/users/get-user-decrypt', userCtrl.getUsersDecrypt);
export default router;