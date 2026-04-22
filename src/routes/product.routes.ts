import { Router } from 'express';
import { getProducts, searchProducts } from '../controllers/product.controller.js';

const router = Router();

router.get('/', getProducts);
router.get('/search', searchProducts);

export default router;
