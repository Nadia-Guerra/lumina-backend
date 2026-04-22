import { Request, Response } from 'express';
import { MakeupService } from '../services/makeup.service.js';

export const getProducts = async (req: Request, res: Response) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        
        const data = await MakeupService.getProducts(page, limit);
        return res.status(200).json({ success: true, data });
    } catch (error: any) {
        console.error("Error in getProducts:", error);
        return res.status(500).json({ success: false, message: 'Error retrieving products', error: error.message });
    }
};

export const searchProducts = async (req: Request, res: Response) => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        
        const data = await MakeupService.searchProducts(req.query, page, limit);
        return res.status(200).json({ success: true, data });
    } catch (error: any) {
        console.error("Error in searchProducts:", error);
        return res.status(500).json({ success: false, message: 'Error searching products', error: error.message });
    }
};
