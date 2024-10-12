import userSchema from "../database/models/user.js";

export const user_middleRegister = async (req, res, next) => {
    try {
      const userId = req.params.userId || req.body.userId;
      const users = await userSchema.findOne(userId);
      if (!users) {
        return res.status(404).redirect('/auth/user/register');/*.json({ message: 'Usuario no encontrado' });*/
      }
      req.user = users.email;
      next();
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
      res.status(500).json({ message: 'Error del servidor' });
    }
};