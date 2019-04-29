const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EarningsSchema = new Schema(
	{
		name: { Type: String, required: true },
		hours: { Type: Number },
		earning: { Type: Number, required: true },
		description: { Type: String }
	},
	{ timestamps: true }
);

const Earnings = mongoose.model("Earnings", EarningsSchema);
module.exports = Earnings;
