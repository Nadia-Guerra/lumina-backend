import prisma from '../config/prisma.js'

export const addFavoriteService = async (userId: string, productData: { externalId: number, name?: string, imgUrl?: string }) => {
    const product = await prisma.makeupProduct.upsert({
        where: { externalId: productData.externalId },
        update: {},
        create: {
            externalId: productData.externalId,
            name: productData.name ?? null,
            imgUrl: productData.imgUrl ?? null,
        },
    });

    return await prisma.favorite.create({
        data: {
            userId: userId, 
            makeupProductId: product.id,
        },
    });
};