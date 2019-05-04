const Report = require("../models/Reports");

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
		// Check if the required information is available and create a report
		// Add the author information into the value
		let { month, description } = req.body;
		let errors = [];

		if (!month) {
			errors.push("Month is missing");
		}

		if (errors.length > 0) {
			res.json({ success: false, errors: errors });
		} else {
			let newReport = new Report({
				month,
				description: description || ""
			});

			newReport
				.save()
				.then(report => {
					res.json({ success: true, message: "report added succesfully" });
				})
				.catch(err => console.log(err));
		}
	},
	editReport: (req, res) => {
		// Check if the report is of the same user
		// Check if the required information is available and edit the report
	},
	deleteReport: (req, res) => {
		// Check if the report is of the same user
		// Check if the report id is available and delete the report
	}
};
