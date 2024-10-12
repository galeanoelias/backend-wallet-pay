import userSchema from "../database/models/user.js";

export const userMiddle = async (req, res, next) => {
    try {
      const userId = req.params.userId || req.body.userId;
      const users = await userSchema.findOne(userId);
      if (!users) {
        return res.status(404).redirect('/auth/user/login');/*.json({ message: 'Usuario no encontrado' });*/
      }
      req.user = users.email;
      next();
    } catch (error) {
      res.status(500).json({ message: 'Error del servidor' + error });
    }
};