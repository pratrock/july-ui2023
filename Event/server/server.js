require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const api = require("./routes/api.js");
const cors = require("cors");
var app = express();
app.use(cors());
app.use(express.json());
const mongoose = require("mongoose");
const db =
  "mongodb+srv://prateek:141104pp@cluster0.3cwa5.mongodb.net/?retryWrites=true&w=majority";
app.use(express.json());
mongoose.connect(`${db}`, { useNewUrlParser: true });

app.use("/api", api);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
