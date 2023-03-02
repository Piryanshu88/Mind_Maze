const express = require("express");

require("dotenv").config();
const cors = require("cors");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.routes");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/user", userRouter);

app.listen(8080, async () => {
  try {
    await connection;
    console.log(`server running at port ${process.env.port}`);
  } catch (error) {
    console.log(error);
  }
});
