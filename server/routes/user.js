const express = require("express");
const router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const userController = require("./../controllers/users");

router.post("/register", userController.createUser);

router.post("/login", function(req, res, next) {
	passport.authenticate("local", function(err, user, info) {
		console.log(err, user, info);
		if (err) {
			return next(err);
		}
		if (!user) {
			return res.redirect("/login");
		}
		req.logIn(user, function(err) {
			if (err) {
				return next(err);
			}
			return res.redirect("/users/" + user.username);
		});
	})(req, res, next);
});

router.get("/isLoggedIn", userController.isUser);
router.get("/user", userController.getUser);

module.exports = router;
