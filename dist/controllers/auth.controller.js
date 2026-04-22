import { authService } from '../services/auth.service.js';
export const register = async (req, res) => {
    try {
        const { email, password, username } = req.body;
        const newUser = await authService.register(email, password, username);
        return res.status(201).json({
            success: true,
            message: 'Usuario registrado exitosamente',
            data: newUser
        });
    }
    catch (error) {
        if (error?.errorInfo?.code === 'auth/email-already-exists') {
            return res.status(409).json({
                success: false,
                message: 'El email ya está registrado'
            });
        }
        if (error?.code === 'P2002') {
            return res.status(409).json({
                success: false,
                message: 'Ya existe un usuario con ese email'
            });
        }
        console.error('Error en register:', error);
        return res.status(500).json({
            success: false,
            message: 'Error interno del servidor'
        });
    }
};
export const loginSync = async (req, res) => {
    try {
        // El usuario ya viene decodificado por el middleware verifyToken
        const { uid, email, name } = req.user;
        const user = await authService.syncUser(uid, email, name);
        return res.status(200).json({
            success: true,
            message: 'Login exitoso',
            data: user
        });
    }
    catch (error) {
        if (error?.code === 'P2002') {
            return res.status(409).json({
                success: false,
                message: 'Conflicto al sincronizar usuario'
            });
        }
        console.error('Error en loginSync:', error);
        return res.status(500).json({
            success: false,
            message: 'Error interno del servidor'
        });
    }
};
//# sourceMappingURL=auth.controller.js.map