import { MakeupService } from '../services/makeup.service.js';
import { GeminiService } from '../services/gemini.service.js';
export const getRecommendation = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ error: 'Product ID is required' });
        }
        // 1. Fetch the product details from the Makeup API
        const product = await MakeupService.getProductById("" + id);
        if (!product || Object.keys(product).length === 0 || product.id === undefined) {
            return res.status(404).json({ error: `Product with ID ${id} not found` });
        }
        // 2. Generate the usage recommendation using Gemini
        const recommendation = await GeminiService.getUsageRecommendation(product);
        // 3. Return the combined result
        return res.status(200).json({
            product: {
                id: product.id,
                name: product.name,
                brand: product.brand,
                category: product.category,
                image_link: product.image_link,
            },
            recommendation,
        });
    }
    catch (error) {
        console.error('Error in getRecommendation controller:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
//# sourceMappingURL=recommendation.controller.js.map