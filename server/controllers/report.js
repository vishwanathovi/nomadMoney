const Report = require("../models/Reports");
const User = require("../models/Users");

module.exports = {
	showAllReports: (req, res) => {
		// Fetch all the reports expert the authors and send
	},
	showMyReports: (req, res) => {
		// Fetch all the reports of the author and send
	},
	showMyReport: (req, res) => {
		// Fetch report according to the id and send the data
	},
	createReport: (req, res) => {
		// Check if the required information is available
		// Create a report
		// Add report id into the User collection

		let { month, description } = req.body;
		let errors = [];
		let userId = req.user._id;

		if (!month) {
			errors.push("Month is missing");
		}

		if (errors.length > 0) {
			res.json({ success: false, errors: errors });
		} else {
			let newReport = new Report({
				month,
				description: description || "",
				author: userId
			});

			newReport
				.save()
				.then(report => {
					User.findOneAndUpdate(
						{ _id: req.user._id },
						{ $push: { reports: report._id } },
						{ new: true },
						(err, user) => {
							if (err) console.log(err);
							res.json({ success: true, message: "report added succesfully" });
						}
					);
				})
				.catch(err => console.log(err));
		}
	},
	editReport: (req, res) => {
		// Check if the report is of the same user
		// Check if the required information is available
		// edit the report

		let userId = req.user._id;
		let { month, description } = req.body;
		let reportId = req.params.reportid;
		let errors = [];

		if (!month) {
			errors.push("Month is missing");
		}

		if (errors.length > 0) {
			res.json({ success: false, errors: errors });
		} else {
			// Check if the author is the current user
			Report.findOne({ _id: reportId }, (err, report) => {
				if (err) console.log(err);
				console.log("report.author", report.author, "Userid", userId);
				if (report.author !== userId) {
					res.json({
						success: false,
						message:
							"Current user is not the author and does not have permission to delete this!"
					});
				} else {
					// Update the reports value
					Report.findOneAndUpdate(
						{ _id: reportId },
						req.body,
						(err, report) => {
							if (err) console.log(err);
							res.json({
								success: true,
								message: "Report updated successfully!"
							});
						}
					);
				}
			});
		}
	},
	deleteReport: (req, res) => {
		// Check if the report is of the same user
		// Check if the report id is available and delete the report
	}
};
