import { Router } from 'express';
// @ts-ignore
import { register, loginSync } from '../controllers/auth.controllers.js.';
import { verifyToken } from '../middlewares/auth.middleware.js';
const router = Router();
// Registro manual (Crea en Firebase y DB)
router.post('/register', register);
// Login (El frontend manda el token de Firebase, el middleware lo valida y el controller sincroniza)
router.post('/login', verifyToken, loginSync);
export default router;
//# sourceMappingURL=auth.routes.js.map