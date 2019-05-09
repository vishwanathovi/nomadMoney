const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EarningsSchema = new Schema(
	{
		title: { type: String, required: true },
		hours: { type: Number },
		earning: { type: Number, required: true },
		description: { type: String },
		reportid: { type: Schema.Types.ObjectId, ref: "Reports" }
	},
	{ timestamps: true }
);

const Earnings = mongoose.model("Earnings", EarningsSchema);
module.exports = Earnings;
