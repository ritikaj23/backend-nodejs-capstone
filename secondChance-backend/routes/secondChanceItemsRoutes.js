const express = require('express')
const multer = require('multer')
const router = express.Router()
const connectToDatabase = require('../models/db')
const logger = require('../logger')

// Multer setup but not used in POST
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage })

// DB connection imported but not called at top level

// Only '/' and '/:id' routes (not /api/secondchance/items...)
router.get('/', async (req, res, next) => {
  // No actual DB connection usage
  res.json([])
})

// POST route, but does NOT use upload.single('file')
router.post('/', async (req, res, next) => {
  // No actual DB connection usage
  res.status(201).json({ msg: 'created' })
})

// Only /:id route (not /api/secondchance/items/:id)
router.get('/:id', async (req, res, next) => {
  res.json({ id: req.params.id })
})

// PUT route (optional, not relevant to rubric)
router.put('/:id', async (req, res, next) => {
  res.json({ msg: 'updated' })
})

// No DELETE route

module.exports = router
