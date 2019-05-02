const User = require("../models/Users");
const bcrypt = require("bcryptjs");

module.exports = {
	createUser: (req, res) => {
		let { username, email, password } = req.body;
		let errors = [];
		let emailRegex = RegExp(
			"^([a-zA-Z0-9_\\-\\.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([a-zA-Z0-9-]+.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(]?)$"
		);

		// Password expresion that requires one lower case letter, one upper case letter, one digit, 6-13 length, and no spaces.
		let passwordRegex = RegExp("^(?=.*d)(?=.*[a-z])(?=.*[A-Z])$");

		if (!username || !email || !password) {
			errors.push("Please provide all the information required!");
		}

		if (!emailRegex.test(email)) {
			errors.push("Please provide a valid mail id!");
		}

		// TODO: Handle password validation

		// if (!passwordRegex.test(password)) {
		// 	errors.push(
		// 		"Password should have one lower case letter, one upper case letter, one digit, 6-13 length, and no spaces."
		// 	);
		// }

		User.findOne({ email: email }, (err, user) => {
			if (err) throw err;
			if (user) {
				errors.push("Email id already present!");
			}
		});

		if (errors.length > 0) {
			res.json({ errors: errors });
		} else {
			const newUser = new User({
				username,
				email,
				password
			});

			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) throw err;
					newUser.password = hash;
					newUser
						.save()
						.then(user => {
							res.redirect("/login");
						})
						.catch(err => console.log(err));
				});
			});
		}
	},
	loginUser: (req, res) => {},
	isUser: (req, res) => {},
	getUser: (req, res) => {}
};
