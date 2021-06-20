const { CustomError } = require("../errors/custom-error");

const customError = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: "please try again" });
};

module.exports = customError;
