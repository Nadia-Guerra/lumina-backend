export interface MakeupProduct {
    id: number;
    name: string;
    brand: string;
    price: string;
    description: string;
    category: string;
    product_type: string;
    image_link: string;
    product_link: string;
}
export declare class MakeupService {
    /**
     * Fetches product details from the Makeup API.
     * @param id The ID of the makeup product.
     * @returns The product details.
     */
    static getProductById(id: string): Promise<MakeupProduct>;
}
//# sourceMappingURL=makeup.service.d.ts.map