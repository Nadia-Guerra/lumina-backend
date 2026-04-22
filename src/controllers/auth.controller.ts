import { Request, Response } from 'express';
import { authService } from '../services/auth.service.js';

export const register = async (req: Request, res: Response) => {
    try {
        const { email, password, username } = req.body;
        if (!email || !password || !username) {
            return res.status(400).json({ message: 'Faltan campos obligatorios' });
        }

        const newUser = await authService.register(email, password, username);
        res.status(201).json({
            message: 'Usuario registrado exitosamente',
            user: newUser
        });
    } catch (error: any) {
        console.error("❌ Error completo:", error);
        res.status(500).json({ message: 'Error en el registro', error: error.message });
    }
};

export const loginSync = async (req: Request, res: Response) => {
    try {
        // El usuario ya viene decodificado por el middleware verifyToken
        const { uid, email, name } = (req as any).user;

        const user = await authService.syncUser(uid, email, name);

        res.status(200).json({
            message: 'Login exitoso y sincronizado',
            user
        });
    } catch (error: any) {
        console.error("❌ Error completo:", error);
        res.status(500).json({ message: 'Error al sincronizar usuario', error: error.message });
    }
};