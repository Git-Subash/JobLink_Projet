import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.json({ message: "Access Denied" });
  }

  jwt.verify(String(token), process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(404).json({ message: "Invalid token" });
    }
    console.log("user id: ", user._id);
    req.user = user;
  });
  next();
};
