const express = require("express");
const app = express();
const chats = require("./data/data.js");
const connectDB = require("./config/db.js");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes.js");
const chatRoutes = require("./routes/chatRoutes.js");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware.js");

const dotenv = require("dotenv");
dotenv.config();
connectDB();

app.use(express.json()); // to accept json data

app.get("/", (req, res) => {
  res.send("API is running... successfully");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.yellow.bold);
});
