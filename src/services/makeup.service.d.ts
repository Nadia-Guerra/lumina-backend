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
    static getProductById(id: string): Promise<MakeupProduct>;
}
//# sourceMappingURL=makeup.service.d.ts.map