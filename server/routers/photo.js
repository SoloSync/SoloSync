const express = require("express");
const multer = require("multer");
const fs = require("fs");
const pool = require("../models/models.js");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/upload", upload.single("picture"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const fileData = fs.readFileSync(req.file.path);

    // Ensure that 'photo' column is of type BYTEA in your database
    const result = await pool.query(
      "INSERT INTO picture(photo) VALUES($1) RETURNING *",
      [fileData]
    );

    // Optionally, delete the temporary file after successful upload
    fs.unlinkSync(req.file.path);

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error uploading picture:", error);
    res.status(500).json({ error: "Error uploading picture" });
  }
});

router.get('/image/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT photo FROM picture WHERE id = $1', [id]);

    if (result.rows.length > 0) {
      const img = result.rows[0].image;
      res.setHeader('Content-Type', 'image/jpeg');
      res.send(img);
    } else {
      res.status(404).json({ error: 'No image found with this ID' });
    }
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).json({ error: 'Error fetching image' });
  }
});

module.exports = router;
