require("dotenv").config();
const connectDB = require("./db/connect");
const Energy = require("./models/energy");
const jsonEneryData = require("./data/data.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Energy.deleteMany();
    await Energy.create(jsonEneryData);
    console.log("energy data created");
    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

start();
