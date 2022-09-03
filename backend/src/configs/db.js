const mongoose = require("mongoose");
require("dotenv").config();
const URL =
  process.env.MONGO_URI ||
  "mongodb+srv://kkr:Rajput2121@iraitech.5ambdqn.mongodb.net/?retryWrites=true&w=majority";

const connect = () => {
  return mongoose.connect(`${URL}`);
};

module.exports = connect;
