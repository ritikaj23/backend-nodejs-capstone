const express = require('express');
const router = express.Router();

const logger = require('../logger');



router.get('/api/secondchance/items', async (req, res, next) => {
  try {

    res.json([]);
  } catch (e) {
    logger.error('Error in GET collection', e);
    next(e);
  }
});


});

router.post('/', async (req, res, next) => {
  try {

    res.status(201).json({ created: true, body: req.body || {} });
  } catch (e) {
    next(e);
  }
});



module.exports = router;
