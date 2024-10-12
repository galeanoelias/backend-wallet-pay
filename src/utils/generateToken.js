import jwt from "jsonwebtoken";

export const generateToken = (_id) => {
  const expiresIn = 60 * 60 * 24 * 1000;
  try {
    const token = jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn });
    return { token, expiresIn };
  } catch (error) {
    console.log(error)
  }
};

// function generateToken(user, exp) {
//   if (user) {
//     console.log(user);
    
//     let token = jwt.sign(
//       {
//         id: user._id,
//       },
//       process.env.JWT_SECRET, //confirmamos que es un string lo que va a recibir
//       {
//         expiresIn: exp,
//       }
//     );
//     return token;
//   }
// }

export const tokenVerificationErrors = {
  "invalid signature": "La firma del JWT no es valida",
  "jwt expired": "JWT expirado",
  "invalid token": "Token no vàlido",
  "No Bearer": "Utiliza formato Bearer",
  "jwt malformed": "JWT formato no valido",
};

// export { generateToken, tokenVerificationErrors }; 