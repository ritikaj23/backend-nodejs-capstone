const express = require('express')
const multer = require('multer')
const router = express.Router()
const connectToDatabase = require('../models/db') // Only imported, not used

// Set up storage for uploaded files (but not used in endpoint)
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/images')
  },
  filename(req, file, cb) {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage })

// Get all items (does NOT use connectToDatabase)
router.get('/', (req, res) => {
  res.json([]) // Returns empty array
})

// Get an item by id (does NOT use connectToDatabase)
router.get('/:id', (req, res) => {
  res.json({}) // Returns empty object
})

// POST new item (does NOT use upload.single('file'))
router.post('/', (req, res) => {
  res.status(201).json({ status: 'created' })
})

// There is NO DELETE endpoint

module.exports = router
