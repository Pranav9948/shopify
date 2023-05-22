const mongoose = require("mongoose");
console.log('uri',process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MongoDB connection is successful");
});

connection.on("error", (error) => {
  console.log("Error in MongoDB connection", error);
});

module.exports = mongoose;