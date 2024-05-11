import mongoose from "mongoose";
// import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      requried: true,
      min: 2,
      max: 50,
    },

    lastName: {
      type: String,
      requried: true,
      min: 2,
      max: 50,
    },

    email: {
      type: String,
      requried: true,
      unique: true,
      min: 2,
      max: 250,
    },
    password: {
      type: String,
      requried: true,
    },
    profileImage: {
      type: String,
      default: "",
    },
    networks: {
      type: Array,
      default: [],
    },
    education: String,
    profileviewed: Number,
    imperssions: Number,
  },
  { timestamps: true }
);

// userSchema.methods.verifyPassword = async function (password) {
//   const user = this;
//   const passMatch = await bcrypt.compare(password, user.password);
//   return passMatch;

const userModel = mongoose.model("User", userSchema);

export default userModel;
