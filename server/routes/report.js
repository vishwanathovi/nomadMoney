const express = require("express");
const router = express.Router();

const reportController = require("./../controllers/report");
const userController = require("./../controllers/users");

router.get("/reports", reportController.showAllReports);
router.get(
	"/my-reports",
	userController.isLoggedIn,
	reportController.showMyReports
);
router.get(
	"/report/:reportid",
	userController.isLoggedIn,
	reportController.showReport
);
router.post(
	"/add-report",
	userController.isLoggedIn,
	reportController.createReport
);
router.put(
	"/report/:reportid",
	userController.isLoggedIn,
	reportController.editReport
);
router.delete(
	"/report/:reportid",
	userController.isLoggedIn,
	reportController.deleteReport
);

module.exports = router;
