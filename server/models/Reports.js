const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReportsSchema = new Schema(
	{
		description: {type: String},
		earnings: [{type: Schema.Types.ObjectId}, ref: "Earnings"]
	},
	{ timestamps: true }
);

const Reports = mongoose.model("Reports", ReportsSchema);
module.exports = Reports;
