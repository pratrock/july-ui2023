const express = require("express");
const dotenv = require("dotenv");
const chats = require("../data/data.js");
const cors = require("cors");
const app = express();
//const connectDB = require("./config/db.js");
const path = require("path");
const userRoutes = require("./routes/userRoutes.js");
const chatRoutes = require("./routes/chatRoutes.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });
//dotenv.config();
const connectDB = require("./config/db.js");
connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});
//route handlers//
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

//error handlers
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT;
app.listen(PORT, console.log(`server started on ${PORT}`));
