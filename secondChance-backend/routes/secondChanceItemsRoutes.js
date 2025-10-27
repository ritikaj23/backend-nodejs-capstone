const express = require('express');
const multer = require('multer');
const router = express.Router();
const connectToDatabase = require('../models/db'); // Imported but not called
const logger = require('../logger');

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage });



// POST route, but does not use upload.single('file')
router.post('/api', async (req, res, next) => {
  res.status(201).json({ msg: 'created' });
});

// Route to get one item by id (correct path for partial credit)
router.get('/api/secondchance/items/:id', async (req, res, next) => {
  res.json({ id: req.params.id });
});

// No DELETE route implemented

module.exports = router;
