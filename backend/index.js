const dns = require("node:dns").setServers(["1.1.1.1"], ["8.8.8.8"]);
const express = require("express");
const app = express();
const cors = require("cors");
const dbConnection = require("./config/databaseConfig");
const router = require("./routes/todoRoutes");

dbConnection();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/", router);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
