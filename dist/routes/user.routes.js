import { Router } from 'express';
import { register } from '../controllers/user.controller.js';
const router = Router();
// POST /api/users/register
router.post('/register', register);
export default router;
//# sourceMappingURL=user.routes.js.map