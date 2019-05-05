const express = require("express");
const router = express.Router();

const earningController = require("./../controllers/earning");
const userController = require("./../controllers/users");

router.get(
	"/report/:reportid/earning/:earningid",
	earningController.getEarning
);
router.post(
	"/report/:reportid/add-earning",
	userController.isLoggedIn,
	earningController.addEarning
);
router.put(
	"/report/:reportid/earning/:earningid",
	userController.isLoggedIn,
	earningController.editEarning
);
router.delete(
	"/report/:reportid/earning/:earningid",
	userController.isLoggedIn,
	earningController.deleteEarning
);

module.exports = router;
