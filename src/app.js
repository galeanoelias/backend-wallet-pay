import express from "express";
import dotenv from "dotenv";
dotenv.config()
import cors from "cors";
import morgan from "morgan";
// Swagger
import swaggerUI from "swagger-ui-express";
import { specs } from "./swaggerDocs.js";
// Import for the file
import fileUpload from "express-fileupload";
//import routes
import generalRoutes from './routes/index.js'

//init app. define and set port
const app = express();

// Config whitelist
const whiteList = [process.env.ORIGIN1]
// console.log(whiteList);

// Cors
app.use(
    cors({
        origin: '*',
        credentials: true,
    })
)

//middlewares
app.use(express.static("public"));

// File Upload
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
    createParentPath: true,
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/docs/api/v1", swaggerUI.serve, swaggerUI.setup(specs));
app.use("/auth", generalRoutes)


const port = process.env.PORT || 3000;
app.set("port", port);

export default app;