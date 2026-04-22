import { Router } from 'express';
import { register, loginSync } from '../controllers/auth.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/register', register);

router.post('/login', verifyToken, loginSync);

export default router;