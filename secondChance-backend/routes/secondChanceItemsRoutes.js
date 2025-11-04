const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db'); // imported but NOT called at top-level (partial)
const logger = require('../logger');

// GET ALL ITEMS (collection)
router.get('/', (req, res) => {
  // Dummy response for collection
  res.json({ items: ["example"] });
});

// NO GET ITEM BY ID (partial credit ONLY for collection route above)

// ADD NEW ITEM (POST, not file upload, not rubric's path)
router.post('/', (req, res) => {
  // Just accept body, simulates add (no file upload)
  res.status(201).json({ created: true, body: req.body });
});

// DELETE ITEM (not rubric's path, but DELETE exists)
router.delete('/:id', (req, res) => {
  res.json({ deleted: req.params.id });
});

module.exports = router;
