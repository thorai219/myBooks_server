const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const { PORT, DB_URI } = require("./config.js");

const authRoutes = require("./routes/auth.routes");
const bookRoutes = require("./routes/books.routes");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.use("/auth", authRoutes);
app.use("/books", bookRoutes);

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
