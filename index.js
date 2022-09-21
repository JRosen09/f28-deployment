//setup the server
const express = require("express");
const path = require("path");
require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();

//frontend routes
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(port, () => {
  console.log("Docked at port" + port);
});
