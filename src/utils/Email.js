import * as nodemailer from 'nodemailer';



const sendMail = (user, template,token) => {
    let templates = [
      {
        id: "welcome",
        subject: "WalletPay - Bienvenido a WalletPay",
        text: "Bienvenido a WalletPay",
        html: welcomeTemplate(user),
      },
      {
        id: "transfer",
        subject: "WalletPay - Tienes un nuevo deposito en tu cuenta",
        text: "Tienes un nuevo deposito en tu cuenta",
        html: transferTemplate(user),
      },
    ];
  
    let datos = templates.filter((dato) => dato.id === template);
  
  
    if (datos.length == 0) {
      return console.log("No se ha seleccionado ningun template");
    }
    
    let transport = nodemailer.createTransport({
      host: "smtp.gmail.com", //Servidor del email.
      port: 25,
      secure: false,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    },
    });

 
    if (!user) {
        return console.log("Usuario no definido");
      }
    
    
    let mailOptions = {
      form: "remitente",
      to: user.email,
      subject: datos[0].subject,
      html: datos[0].html,
    };
    transport.sendMail(mailOptions, (error) => {
      if (error) {
        console.log(error);
        
        
      } else {
        console.log("email enviado");
      }
    });
  };
  
  export { sendMail };

  
export const transferTemplate = (user) =>{
  return (
      `<table width="100%" cellpadding="0" cellspacing="0">
      <tr bgcolor="#10224D">
        <td colspan="2" width="190" height="80" align="center" style="background-color: #f9f7f7;">
          <img src="https://res.cloudinary.com/duk7zris0/image/upload/v1684212309/WalletPay_bki5fq.png" style="margin-top:25px" alt="">
          <img src="https://res.cloudinary.com/duk7zris0/image/upload/v1684269375/email_2_g9cq24.png" width="80px" style="display:block" alt="">
        </td>
      </tr>
      <tr bgcolor="#f9f7f7">
        <td colspan="2" width="50%" align="center" style="background-color: #f9f7f7; text-align: center; padding: 10px;">
        <p style="font-size: 22px; color: black; font-family: Montserrat, Arial, sans-serif;"><b style="color: #10224D">${user?.username}</b></p>
          <p style="font-size: 22px; color: black; font-family: Montserrat, Arial, sans-serif;">¡Tienes un nuevo <b style="color: #6F0B19">deposito</b> en tu cuenta!</p>
          <br>
          <img src="https://res.cloudinary.com/duk7zris0/image/upload/v1684212883/Notifications_jl7yca.png" alt="Image" width="200" height="200" style="max-width: 100%; color: #10224D;">
        </td>
      </tr>
      <tr bgcolor="#10224D">
        <td colspan="2" width="100%" height="80" align="center" style="background-color: #10224D;">
          <p style="color: white; text-align: center; margin: 0; font-family: Montserrat, Arial, sans-serif;">2023 <b>WalletPay</b>. Todos los derechos reservados.</p>
        </td>
      </tr>
      </table>`
  )
}

export const welcomeTemplate = (user) =>{
  return (
      `<table width="100%" cellpadding="0" cellspacing="0">
      <tr bgcolor="#10224D">
      <td colspan="2" width="190" height="80" align="center" style="background-color: #f9f7f7;">
          <img src="https://res.cloudinary.com/duk7zris0/image/upload/v1684212309/WalletPay_bki5fq.png" style="margin-top:25px;" alt="">
          <img src="https://res.cloudinary.com/duk7zris0/image/upload/v1684269375/email_2_g9cq24.png" width="80px" style="display:block" alt="">
      </td>
      </tr>
      <tr bgcolor="#f9f7f7">
      <td colspan="2" width="50%" align="center" style="background-color: #f9f7f7; text-align: center; padding: 10px;">
          <p style="font-size: 22px; color: black; font-family: Montserrat, Arial, sans-serif;"><b style="color: #10224D">${user?.username}</b></p>
          <p style="font-size: 22px; color: black; font-family: Montserrat, Arial, sans-serif;">¡Gracias por <b style="color: #6F0B19">registrarte</b> con nosotros!</p>
          
          <img src="https://res.cloudinary.com/duk7zris0/image/upload/v1684199562/how-to-reg_vc0twi.png" alt="Image" width="200" height="200" style="max-width: 100%; color: #10224D;">
      </td>
      </tr>
      <tr bgcolor="#10224D">
      <td colspan="2" width="100%" height="80" align="center" style="background-color: #10224D;">
          <p style="color: white; text-align: center; margin: 0; font-family: Montserrat, Arial, sans-serif;">2023 <b>WalletPay</b>. Todos los derechos reservados.</p>
      </td>
      </tr>
  </table>`
  )
}