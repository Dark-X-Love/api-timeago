import express, { json, urlencoded } from "express";
import cors from "cors";
import morgan from "morgan";
import { PORT } from "./src/configs/enviroments.js";
import router from "./src/routes/app.routes.js";

const app = express();

//configurando el servidor
app.use(urlencoded({ extended: true }));
app.use(json());

//cors
app.use(cors({ origin: "*" }));

//morgan
app.use(morgan("dev"));

//base de datos

//rutas
app.use("", router);

app.listen(PORT, () => console.log("Activo en el puerto:", PORT));
