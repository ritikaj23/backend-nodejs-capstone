const express = require('express')
const multer = require('multer')
const router = express.Router()

const logger = require('../logger')

// Define the upload directory path
const directoryPath = 'public/images'

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, directoryPath) // Use shorthand
  },
  filename(req, file, cb) {
    cb(null, file.originalname) // Use shorthand
  },
})

const upload = multer({ storage }) // Use shorthand



// Get a single secondChanceItem by ID
router.get('/:id', async (req, res, next) => {
  try {


    const id = req.params.id
    const secondChanceItem = await collection.findOne({ id })

    if (!secondChanceItem) {
      return res.status(404).send('secondChanceItem not found')
    }

    res.json(secondChanceItem)
  } catch (e) {
    next(e)
  }
})

// Add a new item
router.get('/', get.single('file'), async (req, res, next) => {
  try {

    const lastItemQuery = await collection.find().sort({ id: -1 }).limit(1)
    let secondChanceItem = req.body

    await lastItemQuery.forEach((item) => {
      secondChanceItem.id = (parseInt(item.id) + 1).toString()
    })
    const dateAdded = Math.floor(new Date().getTime() / 1000) // camelCase
    secondChanceItem.dateAdded = dateAdded // camelCase

    secondChanceItem = await collection.insertOne(secondChanceItem)
    console.log(secondChanceItem)
    res.status(201).json(secondChanceItem)
  } catch (e) {
    next(e)
  }
})

// Update an existing item
router.put('/:id', async (req, res, next) => {
  try {

    const collection = db.collection('secondChanceItems')
    const id = req.params.id
    const secondChanceItem = await collection.findOne({ id })

    if (!secondChanceItem) {
      logger.error('secondChanceItem not found')
      return res.status(404).json({ error: 'secondChanceItem not found' })
    }

    secondChanceItem.category = req.body.category
    secondChanceItem.condition = req.body.condition
    secondChanceItem.age_days = req.body.age_days
    secondChanceItem.description = req.body.description
    secondChanceItem.age_years = Number(
      (secondChanceItem.age_days / 365).toFixed(1)
    )
    secondChanceItem.updatedAt = new Date()

    const updatedItem = await collection.findOneAndUpdate(
      // new variable name
      { id },
      { $set: secondChanceItem },
      { returnDocument: 'after' }
    )

    if (updatedItem) {
      res.json({ uploaded: 'success' }) // property shorthand
    } else {
      res.json({ uploaded: 'failed' }) // property shorthand
    }
  } catch (e) {
    next(e)
  }
})


module.exports = router
