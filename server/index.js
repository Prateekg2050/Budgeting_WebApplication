require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);
const users = require("./routes/user");

app.use("/user", users);
app.use("/saving", require('./routes/saving'));
app.use("/posts", require('./routes/expense'));
app.get("/", (req, res) => {
  res.send("Server is up and running");
});
app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
