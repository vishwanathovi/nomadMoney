const express = require("express");
const router = express.Router();

// router.get("*", (req, res) => {
// 	res.render("index");
// });

router.get("*", (req, res) => {
	const path = "/static/";
	res.render("index", { path });
});

module.exports = router;
