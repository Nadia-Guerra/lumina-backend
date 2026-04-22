import { Router } from 'express';
import { register, loginSync } from '../controllers/auth.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { registerSchema } from '../schemas/auth.schema.js';

const router = Router();

router.post('/register', validate(registerSchema),register);

router.post('/login', verifyToken, loginSync);

export default router;