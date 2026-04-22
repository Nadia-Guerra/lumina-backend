import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const registerUserService = async (userData) => {
    return await prisma.user.create({
        data: {
            username: userData.username,
            email: userData.email,
            password: userData.password,
        },
    });
};
//# sourceMappingURL=user.service.js.map