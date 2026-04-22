import { Router } from 'express';
import { createFavorite } from '../controllers/favourite.controller.js';

const router = Router();

// POST /api/favorites
router.post('/', createFavorite);

export default router;