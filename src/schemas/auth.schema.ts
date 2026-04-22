import { z } from 'zod';

export const registerSchema = z.object({
    email: z.string().email('Email inválido'),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
    username: z.string().min(2, 'Username muy corto').max(50, 'Username muy largo')
});

//esquema por consistencia, no lleva body realmente
export const loginSchema = z.object({

});