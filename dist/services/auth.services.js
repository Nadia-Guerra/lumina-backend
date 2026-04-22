import { PrismaClient } from '@prisma/client';
import admin from '../config/firebase.js';
const prisma = new PrismaClient();
export const authService = {
    register: async (email, pass, username) => {
        // 1. Crear en Firebase
        const userRecord = await admin.auth().createUser({
            email,
            password: pass,
            displayName: username,
        });
        // 2. Crear en PostgreSQL usando Prisma
        return await prisma.user.create({
            data: {
                id: userRecord.uid, // Sincronizamos el ID de Firebase con nuestra DB
                email: email,
                username: username,
                password: 'EXTERNAL_AUTH' // No guardamos la pass localmente por seguridad
            }
        });
    },
    syncUser: async (firebaseUid, email, name) => {
        let user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            user = await prisma.user.create({
                data: {
                    id: firebaseUid,
                    email,
                    username: name || 'User',
                    password: 'EXTERNAL_AUTH'
                }
            });
        }
        return user;
    }
};
//# sourceMappingURL=auth.services.js.map