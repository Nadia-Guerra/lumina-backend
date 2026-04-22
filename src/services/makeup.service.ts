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

export interface PaginatedProducts {
  products: MakeupProduct[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
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

  static async getProducts(page: number = 1, limit: number = 10): Promise<PaginatedProducts> {
    try {
      const response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json`);
      if (!response.ok) {
        throw new Error(`Failed to fetch products. Status: ${response.status}`);
      }
      const allProducts: MakeupProduct[] = await response.json();

      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const products = allProducts.slice(startIndex, endIndex);

      return {
        products,
        total: allProducts.length,
        page,
        limit,
        totalPages: Math.ceil(allProducts.length / limit)
      };
    } catch (error) {
      console.error("Error fetching makeup products:", error);
      throw error;
    }
  }

  static async searchProducts(queryParams: Record<string, any>, page: number = 1, limit: number = 10): Promise<PaginatedProducts> {
    try {
      const apiParams: Record<string, string> = {};
      for (const key in queryParams) {
        if (key !== 'page' && key !== 'limit' && queryParams[key] !== undefined) {
          apiParams[key] = String(queryParams[key]);
        }
      }

      const urlParams = new URLSearchParams(apiParams);
      const url = `http://makeup-api.herokuapp.com/api/v1/products.json?${urlParams.toString()}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to search products. Status: ${response.status}`);
      }
      const allProducts: MakeupProduct[] = await response.json();

      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const products = allProducts.slice(startIndex, endIndex);

      return {
        products,
        total: allProducts.length,
        page,
        limit,
        totalPages: Math.ceil(allProducts.length / limit)
      };
    } catch (error) {
      console.error("Error searching makeup products:", error);
      throw error;
    }
  }
}
