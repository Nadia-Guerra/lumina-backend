import { z } from 'zod';

export const createReviewSchema = z.object({
    rating: z.number().int().min(1, 'Rating mínimo es 1').max(5, 'Rating máximo es 5'),
    content: z.string().min(1, 'El contenido no puede estar vacío').max(500, 'Máximo 500 caracteres').optional()
});