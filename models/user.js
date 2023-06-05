const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  email: {
    type: String,
    required: true, // поле обязательное
    unique: true, // будет проверять, если есть такая почта, то будет ошибка
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("users", userSchema);
