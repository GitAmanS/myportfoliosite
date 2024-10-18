const express = require('express');
const router = express.Router();
const { getPortfolio, updatePortfolio } = require('../controllers/portfolioController');
const auth = require('../middlewares/authMiddleware');

router.get('/', auth, getPortfolio);
router.put('/', auth, updatePortfolio);

module.exports = router;
