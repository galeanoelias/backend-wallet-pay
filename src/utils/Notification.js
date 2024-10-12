import Notification from "../database/models/notifications.js";


const createNotification = async ({destinyAccountId, message, type}) => {

    try {
      const notification = new Notification({
        destinyAccountId,
        message,
        type,
      });
  
      const savedNotification = await notification.save();
  
      return savedNotification;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear la notificación");
    }
  };

  export default createNotification;