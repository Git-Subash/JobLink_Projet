import User from "../models/Users.js";

export const getUser = async (req, res) => {
  const userId = req.user._id;
  console.log(userId);
  let user;
  try {
    user = await User.findById(userId, "-password");
    if (!user) {
      return res.json({ message: "User Not Found" });
    }
    return res.json({ user });
  } catch (error) {
    console.error("Error occurred while fetching user:", error);
  }
};

export const logoutUser = async (req, res) => {};
