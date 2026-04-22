import { Router } from 'express';
import { getRecommendation } from '../controllers/recommendation.controller.js';

const router = Router();

router.get('/:id', getRecommendation as any);

export default router;
