const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true },
		password: { type: String, required: true },
		reports: [{ type: Schema.Types.ObjectId, ref: "Reports" }],
		bio: { type: String },
		isAdmin: { type: Boolean }
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;

// --------------------- Auth ------------------------------------ //

// const SALT_FACTOR = 10;
// const bcrypt = require("bcrypt");

// userSchema.methods.verifyPassword = function(userPassword, cb) {
// 	bcrypt.compare(userPassword, this.password, function(err, res) {
// 		// console.log(err);
// 		if (err) cb(err, false);
// 		cb(null, res);
// 	});
// };

// userSchema.pre("save", function(next) {
// 	var password = this.password;
// 	var self = this;

// 	if (this.isModified(this.password)) return next();

// 	bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
// 		// console.log("debug 1.5", err, salt);
// 		bcrypt.hash(password, salt, function(err, hash) {
// 			// console.log("debug2", hash, err);
// 			// Store hash in your password DB.
// 			self.password = hash;
// 			next();
// 		});
// 	});
// });
