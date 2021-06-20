const express = require("express");
const app = express();

const connectDB = require("./db/connect");
require("dotenv").config();
// routes
const routes = require("./routes/tasks");
// middleware
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");

app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1/tasks", routes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log("Server listening on port 5000...");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
