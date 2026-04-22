import { Request, Response } from 'express';
import * as favoriteService from '../services/favourites.service.js';

export const createFavorite = async (req: Request, res: Response) => {
    try {
        const { externalId, name, imgUrl, userId } = req.body;
        if (!userId) {
            return res.status(400).json({ error: 'Falta el ID del usuario para esta prueba.' });
        }
        const favorite = await favoriteService.addFavoriteService(userId,{
            externalId,
            name,
            imgUrl
        });

        res.status(201).json({ message: 'Añadido a favoritos', favorite });
    } catch (error) {
        res.status(500).json({ error: 'No se pudo agregar a favoritos' });
    }
};