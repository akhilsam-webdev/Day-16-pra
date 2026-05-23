const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: String,
  profileImage: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/512/9815/9815472.png",
  },
});

const userModel = mongoose.model("users",userSchema)

module.exports = userModel