import { Router } from 'express';
import { register, loginSync } from '../controllers/auth.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';
const router = Router();
// Registro manual (Crea en Firebase y DB)
router.post('/register', register);
// Login (El frontend manda el token de Firebase, el middleware lo valida y el controller sincroniza)
router.post('/login', verifyToken, loginSync);
export default router;
//# sourceMappingURL=auth.route.js.map