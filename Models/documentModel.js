const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.p1zrh.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

const Document = new mongoose.Schema({
  _id: String,
  data: Object,
});

module.exports = mongoose.model("Document", Document);
