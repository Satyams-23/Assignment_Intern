const express = require("express");
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors());

const newsRoute = require("./routes/route");
app.use("/api/news", newsRoute);

mongoose.set("strictQuery", false);

app.get("/", (req, res) => {
  res.send("Working!");
});

mongoose
  .connect(`mongodb+srv://satyam212134111:Babul.45.bs@satyam01.dexkqcz.mongodb.net/`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection is successful"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
