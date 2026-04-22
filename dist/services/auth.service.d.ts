export declare const authService: {
    register: (email: string, pass: string, username: string) => Promise<{
        id: string;
        firebaseUid: string;
        username: string;
        email: string;
        password: string;
        createdAt: Date;
    }>;
    syncUser: (firebaseUid: string, email: string, name: string) => Promise<{
        id: string;
        firebaseUid: string;
        username: string;
        email: string;
        password: string;
        createdAt: Date;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map