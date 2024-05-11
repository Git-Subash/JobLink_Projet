import multer from "multer";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const setPath = path.join(__dirname, "../public");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, setPath, function (error) {
      if (error) {
        console.log(error);
      }
    });
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

export default upload;
