import { Router } from 'express';
import { updateBalance } from '../controllers/balanceController.js';

const router = Router();

router.post('/update-balance', updateBalance);

export default router;