require("dotenv").config();
const mongoose = require("mongoose");

const mongoDB = process.env.MONGODB_LOCAL;

mongoose.set("strictQuery", false);

mongoose.connect(mongoDB, {});
mongoose.Promise = global.Promise;
module.exports = mongoose;
