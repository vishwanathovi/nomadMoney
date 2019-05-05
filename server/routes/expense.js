const express = require("express");
const router = express.Router();

const expenseController = require("./../controllers/expense");
const userController = require("./../controllers/users");

router.get(
	"/report/:reportid/expense/:expenseid",
	expenseController.getExpense
);
router.post(
	"/report/:reportid/add-expense",
	userController.isLoggedIn,
	expenseController.addExpense
);
router.put(
	"/report/:reportid/expense/:expenseid",
	userController.isLoggedIn,
	expenseController.editExpense
);
router.delete(
	"/report/:reportid/expense/:expenseid",
	userController.isLoggedIn,
	expenseController.deleteExpense
);

module.exports = router;
