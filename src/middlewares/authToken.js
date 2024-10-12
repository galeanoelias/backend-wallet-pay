import jwt from "jsonwebtoken";
import { tokenVerificationErrors } from "../utils/generateToken.js";

// Middleware de verificación de token
export const requireToken = (req, res, next) => {
  // Obtener el token del encabezado de autorización
  const token = req.headers.authorization;

  // Verificar si el token existe
  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  try {
    // Verificar y decodificar el token utilizando la clave secreta
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
   
    // Agregar el payload decodificado al objeto de solicitud para que esté disponible en las siguientes rutas
    req.user = decoded;

    // Continuar con la siguiente función de middleware
    next();
  } catch (error) {
        return res
            .status(401)
            .send({ error: tokenVerificationErrors[error.message] });
  }
};