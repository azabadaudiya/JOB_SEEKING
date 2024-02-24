import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import userRouter from "./routes/userRouter.js";
import applicationRouter from "./routes/applicationRouter.js";
import jobRouter from "./routes/jobRouter.js";
import {db} from "./database/db.js";
import { errorMiddleware } from "./middlewares/error.js";
import { catchAsyncErrors } from "./middlewares/catchAsyncError.js";

const app= express();
dotenv.config({path: "./config/config.env"});

app.use(cors({
    origin: ["*"],
    methods: ["GET","POST","DELETE","PUT"],
    credentials:true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/",
}));

app.use("/api/v1/user",userRouter);
app.use("/api/v1/job",jobRouter);
app.use("/api/v1/application",applicationRouter);

db();

app.use(errorMiddleware);
app.use(catchAsyncErrors);

export default app;
