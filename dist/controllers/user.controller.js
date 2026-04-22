import * as userService from '../services/user.service.js';
export const register = async (req, res) => {
    try {
        const newUser = await userService.registerUserService(req.body);
        const { password, ...userWithoutPassword } = newUser;
        res.status(201).json({
            message: '¡Usuario creado con éxito!',
            user: userWithoutPassword
        });
    }
    catch (error) {
        if (error.code === 'P2002') {
            return res.status(400).json({ error: 'El correo ya está registrado.' });
        }
        res.status(500).json({ error: 'Error al registrar usuario' });
    }
};
//# sourceMappingURL=user.controller.js.map