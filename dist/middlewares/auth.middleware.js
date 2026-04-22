import admin from '../config/firebase.js';
import prisma from '../config/prisma.js';
export const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = await admin.auth().verifyIdToken(token); //quitar el !
        req.user = decoded; //correccion rapida, luego se arregla
        next();
        const dbUser = await prisma.user.findUnique({
            where: { firebaseUid: decoded.uid }
        });
        if (!dbUser) {
            return res.status(401).json({ success: false, message: 'Usuario no registrado en el sistema' });
        }
        req.user = { ...decoded, dbId: dbUser.id };
        next();
    }
    catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};
//# sourceMappingURL=auth.middleware.js.map