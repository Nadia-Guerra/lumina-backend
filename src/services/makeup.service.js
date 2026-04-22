export class MakeupService {
    /**
     * Fetches product details from the Makeup API.
     * @param id The ID of the makeup product.
     * @returns The product details.
     */
    static async getProductById(id) {
        try {
            const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`);
            if (!response.ok) {
                throw new Error(`Failed to fetch product with ID ${id}. Status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error(`Error fetching makeup product ${id}:`, error);
            throw error;
        }
    }
}
//# sourceMappingURL=makeup.service.js.map