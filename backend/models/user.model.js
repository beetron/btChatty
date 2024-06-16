import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  profilePhoto: {
    type: String,
    default: "",
  },
  friendRequest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: [],
  },
  friendList: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: [],
  },
});

const user = mongoose.model("User", userSchema);

export default user;
