import { Router } from 'express';
import { getRecommendation } from '../controllers/recommendation.controller.js';
const router = Router();
// GET /api/recommendations/:id
router.get('/:id', getRecommendation);
export default router;
//# sourceMappingURL=recommendation.routes.js.map