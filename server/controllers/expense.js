const Report = require("../models/Reports");
const Expense = require("../models/Expenses");

module.exports = {
	getExpense: (req, res) => {
		// search for the expenseid
		// check if expense is present
		// send the expense data back
		let { expenseid } = req.params;

		Expense.findOne({ _id: expenseid }, (err, expense) => {
			if (err) return console.log(err);
			if (!expense) {
				return res.json({ success: false, message: "expense not found!" });
			}

			return res.json({ success: true, expense: expense });
		});
	},
	addExpense: (req, res) => {
		// check if the report is present
		// check if the current user is the author of the report
		// add the expense
		// add the expense id into the report schema
		let { reportid } = req.params;
		let userId = String(req.user._id);
		let { title, expense, description } = req.body;

		Report.findOne({ _id: reportid }, (err, report) => {
			if (err) return console.log(err);
			if (!report) {
				return res.json({
					success: false,
					message: "Report not found! Try again!"
				});
			}
			if (String(report.author) !== userId) {
				return res.json({
					success: false,
					message:
						"User does not have the permission to add an expense in this report!"
				});
			}
			let newExpense = new Expense({
				title,
				expense,
				description,
				reportid
			});
			newExpense
				.save()
				.then(expense => {
					Report.findOneAndUpdate(
						{ _id: reportid },
						{ $push: { expenses: expense._id } },
						{ new: true },
						(err, report) => {
							if (err) return console.log(err);
							return res.json({
								success: true,
								message: "Expense added successfully!"
							});
						}
					);
				})
				.catch(err => console.log(err));
		});
	},
	editExpense: (req, res) => {
		// check if the report is present
		// check if the current user is the author of the report
		// edit the expense
		let { expenseid, reportid } = req.params;
		let userId = String(req.user._id);

		Report.findOne({ _id: reportid }, (err, report) => {
			if (err) return console.log(err);
			if (!report) {
				return res.json({
					success: false,
					message: "Report not found! Try again!"
				});
			}
			if (String(report.author) !== userId) {
				return res.json({
					success: false,
					message:
						"User does not have the permission to edit an expense in this report!"
				});
			}

			Expense.findOneAndUpdate({ _id: expenseid }, req.body, (err, expense) => {
				if (err) return console.log(err);
				return res.json({
					success: true,
					message: "Expense updated successfully!"
				});
			});
		});
	},
	deleteExpense: (req, res) => {
		// check if the report is present
		// check if the current user is the author of the report
		// Check if the expense is present
		// remove the expense
		// remove the expense from the report schema
		let { expenseid, reportid } = req.params;
		let userId = String(req.user._id);
		let { title, expense, description } = req.body;

		Report.findOne({ _id: reportid }, (err, report) => {
			if (err) return console.log(err);
			if (!report) {
				return res.json({
					success: false,
					message: "Report not found! Try again!"
				});
			}
			if (String(report.author) !== userId) {
				return res.json({
					success: false,
					message:
						"User does not have the permission to add an expense in this report!"
				});
			}

			Expense.findOneAndRemove({ _id: expenseid }, (err, expense) => {
				if (err) return console.log(err);
				if (!expense) {
					return res.json({
						success: false,
						message: "Expense not found! Try again!"
					});
				}
				Report.findOneAndUpdate(
					{ _id: reportid },
					{ $pull: { expenses: expenseid } },
					(err, report) => {
						if (err) return console.log(err);
						return res.json({
							success: true,
							message: "expense removed successfully!"
						});
					}
				);
			});
		});
	}
};
