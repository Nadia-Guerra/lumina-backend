import { MakeupProduct } from './makeup.service.js';
export declare class GeminiService {
    /**
     * Prompts Gemini to provide a customized step-by-step usage recommendation or tip
     * based on the product details.
     * @param product The makeup product details.
     * @returns AI-generated recommendation.
     */
    static getUsageRecommendation(product: MakeupProduct): Promise<string>;
}
//# sourceMappingURL=gemini.service.d.ts.map