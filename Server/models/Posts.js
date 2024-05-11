import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  post: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const postModel = mongoose.model("Posts", userSchema);

export default postModel;
