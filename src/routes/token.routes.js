import { Router } from 'express';
const router = Router();

import * as autenticationCtrl from '../controllers/autentication.controller';

//token
router.post('/autenticar',autenticationCtrl.generateToken);
router.get('/autenticar/token',autenticationCtrl.validateToken);
export default router;