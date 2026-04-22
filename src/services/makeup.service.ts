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

export class MakeupService {
  static async getProductById(id: string): Promise<MakeupProduct> {
    try {
      const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`);
      if (!response.ok) {
        throw new Error(`Failed to fetch product with ID ${id}. Status: ${response.status}`);
      }
      const data: MakeupProduct = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching makeup product ${id}:`, error);
      throw error;
    }
  }
}
