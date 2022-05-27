import express from "express";
import UsersRouting from "./routes/users.routes.js";
import ActivityRouting from './routes/activity.routes.js'
import morgan from "morgan";
import cors from "cors";
const app = express();

//middlewares

app.use(express.json());
app.use(morgan('dev'))
app.use(cors())

//routing

app.use("/activity", ActivityRouting);
app.use("/users", UsersRouting);
export default app;
