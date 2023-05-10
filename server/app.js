import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
dotenv.config();

import ClientRoute from "./Router/Client/Router.js";
import AdminRoute from "./Router/Admin/Router.js";
import TurfADminRoute from "./Router/Turf-admin/Router.js";
import ConversationRoute from "./Router/Conversation/Router.js";
import MessageRoute from "./Router/Messages/Router.js";

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use(helmet({ crossOriginResourcePolicy: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

/* ROUTES */
app.use("/api/client/", ClientRoute);
app.use("/api/admin", AdminRoute);
app.use("/api/turf-admin", TurfADminRoute);
app.use("/api/conversation", ConversationRoute);
app.use("/api/chat", MessageRoute);

/* MONGOOSE SETUP */
const PORT = process.env.PORT;
mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    })
    .catch((error) => console.log(`${error} did not connect`));
