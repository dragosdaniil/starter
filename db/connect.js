const moongose = require("mongoose");

const connectDB = (url) => {
  return moongose
    .connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log("CONNECTED TO THE DB"))
    .catch((error) => console.log(error));
};

module.exports = connectDB;
