const express = require('express');
const BudgetController = require('../controllers/BudgetController');

const router = express.Router();

router
	.get(`/budgets/numberbudget/:numberbudget`, BudgetController.showByNum)


module.exports = router;
