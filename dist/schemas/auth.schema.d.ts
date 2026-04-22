import { z } from 'zod';
export declare const registerSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    username: z.ZodString;
}, z.core.$strip>;
export declare const loginSchema: z.ZodObject<{}, z.core.$strip>;
//# sourceMappingURL=auth.schema.d.ts.map