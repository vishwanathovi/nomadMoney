const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExpensesSchema = new Schema(
	{
		title: { type: String, required: true },
		expense: { type: Number, required: true },
		description: { type: String },
		reportid: { type: Schema.Types.ObjectId, ref: "Reports" }
	},
	{ timestamps: true }
);

const Expenses = mongoose.model("Expenses", ExpensesSchema);
module.exports = Expenses;
