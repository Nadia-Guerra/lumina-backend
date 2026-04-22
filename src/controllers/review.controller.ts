import { Request, Response } from 'express';
import { reviewService } from '../services/review.service.js';

export const createReview = async (req: Request, res: Response) => {
    try {
        const { rating, content } = req.body;
        const productIdParam = req.params.productId as string;
        const externalProductId = parseInt(productIdParam, 10);
        const userId = (req as any).user?.dbId;

        if (!userId) {
            return res.status(401).json({
                success: false,
            });
        }

        if (isNaN(externalProductId)) {
            return res.status(400).json({
                success: false,
                message: 'ID de producto inválido'
            });
        }

        const review = await reviewService.createReview(userId, externalProductId, rating, content);
        return res.status(201).json({
            success: true,
            message: 'Reseña creada exitosamente',
            data: review
        });

    } catch (error: any) {
        if (error.message === 'REVIEW_ALREADY_EXISTS') {
            return res.status(409).json({
                success: false,
                message: 'Ya dejaste una reseña para este producto'
            });
        }
        console.error('Error en createReview:', error);
        return res.status(500).json({
            success: false,
            message: 'Error interno del servidor'
        });
    }
};

export const getReviewsByProduct = async (req: Request, res: Response) => {
    try {
        const productIdParam = req.params.productId as string;
        const externalProductId = parseInt(productIdParam, 10);

        if (isNaN(externalProductId)) {
            return res.status(400).json({
                success: false,
                message: 'ID de producto inválido'
            });
        }

        const reviews = await reviewService.getReviewsByProduct(externalProductId);
        return res.status(200).json({
            success: true,
            data: reviews
        });

    } catch (error: any) {
        console.error('Error en getReviewsByProduct:', error);
        return res.status(500).json({
            success: false,
            message: 'Error interno del servidor'
        });
    }
};