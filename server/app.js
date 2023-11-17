require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();
const connectDB = require("./db/connect");
const port = process.env.PORT || 3000;
const energyRouter = require("./routes/energy");
app.use(express.json());
app.use("/api/v1/energy", energyRouter);
app.use(cors());

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server started on ${port}`));
  } catch (e) {
    console.log(e);
  }
};

start();
