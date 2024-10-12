import errorSchema from '../database/models/error.js' // Importa el esquema de errores aquí

const saveErrorToDatabase = async (error) => {
    let {message,stack} = error;
    console.log(message,stack)
  const errorData = {
    message: error.message,
    stackTrace: error.stack,
  };

  const savedError = await errorSchema.create(errorData);

  if (!savedError || !savedError._id) {
    console.log('Error, el incidente no se pudo registrar correctamente');
  }else{
    console.log('Error, el incidente se registro correctamente');
  }
};

export default saveErrorToDatabase;