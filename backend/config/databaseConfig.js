const mongoose = require("mongoose");

let dbConnection = () => {
  return mongoose
    .connect(
      "mongodb+srv://root:admin123@practice.4u2mmnp.mongodb.net/class08?appName=Practice",
    )
    .then(() => {
      console.log("DB Connected");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = dbConnection;
