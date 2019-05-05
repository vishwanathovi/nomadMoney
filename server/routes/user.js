const express = require("express");
const router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const userController = require("./../controllers/users");

router.post("/register", userController.createUser);

// TODO: Move the login logic to controller file
router.post("/login", function(req, res, next) {
	passport.authenticate("local", function(err, user, info) {
		console.log("passport output: ", err, user, info);
		if (err) {
			return next(err);
		}
		if (!user) {
			return res.json({
				success: false,
				message: "EmailID not found! Please register!"
			});
		}
		req.logIn(user, function(err) {
			if (err) {
				return next(err);
			}
			return res.json({ success: true, message: "Logged in succesfully!" });
		});
	})(req, res, next);
});

router.get("/logout", userController.logOut);

module.exports = router;
