const express = require('express');
const router = express.Router();
const axios = require('axios');
const { getUpdatedWindow } = require('../utils/slidingWindow');

let slidingWindow = [];

router.get('/:numberid', async (req, res) => {
  // We'll add logic here soon
});

module.exports = router;
