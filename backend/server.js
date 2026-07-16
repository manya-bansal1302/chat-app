const express = require("express");
const app = express();
const chats = require("./data/data.js");
const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running... successfully");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
  // console.log(chats);
});

app.get("/api/chat/:id", (req, res) => {
  // console.log(req.params.id);
  const singlechat = chats.find((c) => c._id === req.params.id);
  res.send(singlechat);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
