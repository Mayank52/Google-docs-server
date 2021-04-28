const mongoose = require("mongoose");
const DB_LINK = require("../config/secret");

mongoose.connect(DB_LINK, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const Document = new mongoose.Schema({
  _id: String,
  data: Object,
});

module.exports = mongoose.model("Document", Document);
