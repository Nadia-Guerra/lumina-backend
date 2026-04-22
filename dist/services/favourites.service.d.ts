export declare const addFavoriteService: (userId: string, productData: {
    externalId: number;
    name?: string;
    imgUrl?: string;
}) => Promise<{
    id: string;
    createdAt: Date;
    userId: string;
    makeupProductId: string;
}>;
//# sourceMappingURL=favourites.service.d.ts.map