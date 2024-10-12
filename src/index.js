import app from "./app.js";
import connect from "./database/connect.js";


const bootstrap = () => {
  app.listen(app.get("port"), async () => {
    console.log(`Server on port ${app.get("port")}`);
    await connect();
  });
};

bootstrap();