import prisma from '../config/prisma.js';

export const reviewService = {

    createReview: async (userId: string, externalProductId: number, rating: number, content?: string) => {
        const product = await prisma.makeupProduct.upsert({
            where: { externalId: externalProductId },
            update: {},
            create: { externalId: externalProductId }
        });

        const existing = await prisma.review.findFirst({
            where: { userId, makeupProductId: product.id }
        });

        if (existing) {
            throw new Error('REVIEW_ALREADY_EXISTS');
        }

        return await prisma.review.create({
            data: {
                userId,
                makeupProductId: product.id,
                rating,
                content: content ?? null
            }
        });
    },

    getReviewsByProduct: async (externalProductId: number) => {
        const product = await prisma.makeupProduct.findUnique({
            where: { externalId: externalProductId }
        });

        if (!product) return [];

        return await prisma.review.findMany({
            where: { makeupProductId: product.id },
            include: {
                user: {
                    select: { username: true }
                }
            },
            orderBy: { createdAt: 'desc' }
        });
    }
};