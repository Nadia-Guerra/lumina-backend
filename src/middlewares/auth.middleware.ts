import { Request, Response, NextFunction } from 'express';
import admin from '../config/firebase.js';
import prisma from '../config/prisma.js';


export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1]

    try {
        const decoded = await admin.auth().verifyIdToken(token!);
        console.log("✅ Token de Firebase verificado para UID:", decoded.uid);

        const dbUser = await prisma.user.findUnique({
            where: { firebaseUid: decoded.uid }
        });

        if (!dbUser) {
            return res.status(401).json({ success: false, message: 'Usuario no registrado en el sistema' });

        }

        (req as any).user = {
            ...decoded,
            dbId: dbUser.id
        };

        console.log("Autenticación exitosa. Pasando al controlador...");
        next();

    } catch (error) {
        console.error(" Error verificando token de Firebase:", error);
        return res.status(401).json({ message: 'Invalid token' });
    }
}