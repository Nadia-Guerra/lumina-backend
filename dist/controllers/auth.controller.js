import { authService } from '../services/auth.service.js';
export const register = async (req, res) => {
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
    }
    catch (error) {
        console.error("❌ Error completo:", error);
        res.status(500).json({ message: 'Error en el registro', error: error.message });
    }
};
export const loginSync = async (req, res) => {
    try {
        // El usuario ya viene decodificado por el middleware verifyToken
        const { uid, email, name } = req.user;
        const user = await authService.syncUser(uid, email, name);
        res.status(200).json({
            message: 'Login exitoso y sincronizado',
            user
        });
    }
    catch (error) {
        console.error("❌ Error completo:", error);
        res.status(500).json({ message: 'Error al sincronizar usuario', error: error.message });
    }
};
//# sourceMappingURL=auth.controller.js.map