import userSchema from "../database/models/user.js";
import { generateToken } from "../utils/generateToken.js";
import bcrypt from "bcrypt";
import { faker } from '@faker-js/faker';
import { sendMail } from "../utils/Email.js";
import fs from 'fs-extra';
import { uploadImage, deleteImage } from "../utils/FileUpload.js";
//Cris altere un poco tu codigo
const register = async (req, res) => {
  //toque esto
  
  let { email, password, dni, phone, address, balance , username} = req.body;
  try {
    let checkEmail = await userSchema.findOne({ email });

    if (checkEmail) {
      return res
        .status(409)
        .json({ error: "El correo electrónico ya está en uso" });
    }
    let cv = [];

      for (let i = 0; i < 22; i++) {
        const digito = Math.floor(Math.random() * 10);
        cv.push(digito);
        }

    let numero=cv.join("")
   
    //Generacion de alias
    const animal = faker.animal.bird();
    const color = faker.color.human();
    const company = faker.color.human();

    const ali= `wallet.${color}.${company}`
    let passwordHash = await bcrypt.hash(password, 8);
    let createUser = new userSchema({
      email,
      password: passwordHash,
      phone,
      dni,
      cvu: numero,
      alias:ali.replace(/\s+/g, ""),
      fullname:email.split('@')[0],
      address,
      balance:0,
    });

    if (req.files?.urlProfile) {
      const result = await uploadImage(req.files.urlProfile.tempFilePath)
      createUser.urlProfile = {
        public_id: result.public_id,
        secure_url: result.secure_url
      }
      await fs.unlink(req.files.urlProfile.tempFilePath)
    }
    const dataUser = await createUser.save()

    // const infoUser = dataUser
    //   .findOne({ email: dataUser.email })
    //   .select("-password");

    // sendMail({ 
    //   username:dataUser.email.trim('@gmail.com'),
    //   email:dataUser.email
    // },'welcome')

    return res.status(200).json({ dataUser });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const login = async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await userSchema.findOne({ email })

    if (!user) {
      return res.status(409).json({ error: "Credenciales errores" });
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return res.status(409).json({ error: "El password es incorrecto" });
    }
    const update = await userSchema
      .findOne({ email: user.email }).populate({
        path: 'cards',
        options: { strictPopulate: false }
      }).select("-password");

    let token = generateToken(user._id);

    if (!token) {
      return res.status(401).json({ error: "El token no pudo ser generado" });
    }
    return res.status(200).json({ token, update });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
export { register, login };