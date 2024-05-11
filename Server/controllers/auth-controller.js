import User from "../models/Users.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import fs from "fs";

export const Register = async (req, res) => {
  try {
    const { firstName, lastName, password, email, education, networks } =
      req.body;

    console.log("Request file:", req.file);
    console.log("Request body:", req.body);

    //Checking Existing user
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ error: "User already Exist.." });
    }
    //creating user
    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHashed,
      education,
      profileImage: req.file.filename,
      networks,
      imperssions: Math.floor(Math.random() * 10000),
      profileviewed: Math.floor(Math.random() * 10000),
    });
    const savedUser = await newUser.save();
    console.log("User created:", savedUser);
    res.status(201).json({ status: "Ok", user: savedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating user" });
  }
};

//User Login

export const Login = async (req, res) => {
  const { email, password } = req.body;
  let user;
  try {
    user = await User.findOne({ email: email });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
  if (!user) {
    return res.status(404).json({ error: "Your does't Exsit :( " });
  }
  //passwordvalidation
  const validatePassword = await bcrypt.compare(password, user.password);
  if (!validatePassword) {
    return res.status(404).json({ error: "Invalid username or password." });
  }

  //Generate jwt
  const token = jwt.sign({ _id: user.id }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
  // res.cookie(String(user.id), token, {
  //   path: "/",
  //   expires: new Date(Date.now() + 1000 * 30),
  //   httpOnly: true,
  //   sameSite: "lax",
  // });
  return res
    .status(200)
    .json({ message: "Login Success :)", user: user, token });
};
