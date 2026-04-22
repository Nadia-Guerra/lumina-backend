import { GoogleGenAI } from '@google/genai';
let ai;
const getAi = () => {
    if (!ai)
        ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    return ai;
};
export class GeminiService {
    static async getUsageRecommendation(product) {
        try {
            const prompt = `
        Actúa como un maquillador experto. Un usuario tiene un producto con los siguientes detalles:
        Nombre: ${product.name}
        Marca: ${product.brand}
        Categoría: ${product.category}
        Tipo de Producto: ${product.product_type}
        Descripción: ${product.description || 'No description available.'}
        
        Proporciona una recomendación de uso personalizada paso a paso o consejos profesionales sobre cómo usar este producto específico. Sé conciso, útil y amigable.
      `;
            const response = await getAi().models.generateContent({
                model: 'gemini-2.5-flash-lite',
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