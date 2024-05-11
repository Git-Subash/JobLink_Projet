import express from "express";
import Posts from "../models/Posts.js";
import upload from "../middleware/multer.js";

const router = express.Router();

router.post("/api/Post", upload.single("image"), async (req, res) => {
  try {
    // Ensure file upload
    if (!req.file) {
      console.error("No file uploaded");
      res.status(201).json({ status: "Success", data });
    }
    const post = new Posts({
      post: req.body.post,
      image: req.file.filename,
    });
    const data = await post.save();
    console.log("data added to the database", data);
    res.json({ status: "Success" });
  } catch (error) {
    res.status(400).json({ error: "error" });
    console.error("Error saving post:", error.message);
  }
});

export default router;
