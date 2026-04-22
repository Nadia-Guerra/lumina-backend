import prisma from '../config/prisma.js';
import admin from '../config/firebase.js';

export const authService = {
    register: async (email: string, pass: string, username: string) => {
        const userRecord = await admin.auth().createUser({
            email,
            password: pass,
            displayName: username,
        });

        return await prisma.user.create({
            data: {
                firebaseUid: userRecord.uid,
                email: email,
                username: username,
                password: 'EXTERNAL_AUTH'
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