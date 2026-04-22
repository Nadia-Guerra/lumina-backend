import { GoogleGenAI } from '@google/genai';
// Initialize the Gemini API client
// It will automatically use the GEMINI_API_KEY environment variable.
const ai = new GoogleGenAI({});
export class GeminiService {
    /**
     * Prompts Gemini to provide a customized step-by-step usage recommendation or tip
     * based on the product details.
     * @param product The makeup product details.
     * @returns AI-generated recommendation.
     */
    static async getUsageRecommendation(product) {
        try {
            const prompt = `
        You are a professional makeup artist. A user has a product with the following details:
        Name: ${product.name}
        Brand: ${product.brand}
        Category: ${product.category}
        Product Type: ${product.product_type}
        Description: ${product.description || 'No description available.'}
        
        Please provide a customized step-by-step usage recommendation or professional tips on how to use this specific product. Be concise, helpful, and friendly.
      `;
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
            });
            return response.text || 'No recommendation available.';
        }
        catch (error) {
            console.error('Error generating recommendation from Gemini:', error);
            throw error;
        }
    }
}
//# sourceMappingURL=gemini.service.js.map