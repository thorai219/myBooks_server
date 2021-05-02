import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { PORT, DB_URI } from "./config.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.use("/auth", authRoutes);

app.get("/", (req, res) => res.send("welcome to books api!"));

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`App started at ${PORT}`));
  })
  .catch((err) => console.log(err));

mongoose.set("useFindAndModify", false);
