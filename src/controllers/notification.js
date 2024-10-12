import Notification from "../database/models/notifications.js";

const getNotificationsById = async (req, res) => {
    try {
      const { id, amount } = req.body;
      console.log(id,amount)
      const query = { destinyAccountId: id };
  
      let notifications;
      if (amount) {

        notifications = await Notification.find(query)
          .sort({ timestamp: -1 })
          .limit(amount !== 0 ? amount : -1);
      } 

      res.status(200).json({ notifications: notifications });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error al obtener las notificaciones" });
    }
  };
  
export  {getNotificationsById};