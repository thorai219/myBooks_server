import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  wishlist: [{ isbn: String }],
  finished: [{ isbn: String }],
});

const User = mongoose.model("users", userSchema);

export default User;
