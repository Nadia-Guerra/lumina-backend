import prisma from '../config/prisma.js';
import admin from '../config/firebase.js';

export const authService = {
    register: async (email: string, pass: string, username: string) => {
        // 1. Crear en Firebase
        const userRecord = await admin.auth().createUser({
            email,
            password: pass,
            displayName: username,
        });

        // 2. Crear en PostgreSQL usando Prisma
        return await prisma.user.create({
            data: {
                firebaseUid: userRecord.uid,
                email: email,
                username: username,
                password: 'EXTERNAL_AUTH' // No guardamos la pass localmente por seguridad
            }
        });
    },

    syncUser: async (firebaseUid: string, email: string, name: string) => {
        let user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            user = await prisma.user.create({
                data: {
                    firebaseUid: firebaseUid,
                    email,
                    username: name || 'User',
                    password: 'EXTERNAL_AUTH'
                }
            });
        }
        return user;
    }
};