import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
//import middlewares
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
//import routes
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import postRoute from "./routes/postRoute.js";

const app = express();
const Port = 3000;

//Mongoose connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

//Middlieware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));
//Route Middleware
app.use(authRoute);
app.use(userRoute);
app.use(postRoute);
// app.use(userRoute);

app.listen(Port, () => {
  console.log(`Listening To Port: ${Port}`);
});
