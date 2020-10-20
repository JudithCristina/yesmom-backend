import { Router } from 'express';
const router = Router();

import * as autenticationCtrl from '../controllers/autentication.controller';

//token
router.post('/autenticar',autenticationCtrl.generateToken);

export default router;