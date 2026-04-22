import { Router } from 'express';
import { createReview, getReviewsByProduct } from '../controllers/review.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { createReviewSchema } from '../schemas/review.schema.js';

const router = Router();

router.get('/:productId', getReviewsByProduct);

router.post('/:productId', verifyToken, validate(createReviewSchema), createReview);

export default router;