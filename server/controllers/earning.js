const Report = require("../models/Reports");
const Earning = require("../models/Earnings");

module.exports = {
	getEarning: (req, res) => {
		// search for the earningid
		// check if earning is present
		// send the earning data back
		let { earningid } = req.params;

		Earning.findOne({ _id: earningid }, (err, earning) => {
			if (err) return console.log(err);
			if (!earning) {
				return res.json({ success: false, message: "earning not found!" });
			}

			return res.json({ success: true, earning: earning });
		});
	},
	addEarning: (req, res) => {
		// check if the report is present
		// check if the current user is the author of the report
		// add the earning
		// add the earning id into the report schema
		let { reportid } = req.params;
		let userId = String(req.user._id);
		let { title, earning, description, hours } = req.body;

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
						"User does not have the permission to add an earning in this report!"
				});
			}
			let newEarning = new Earning({
				title,
				hours,
				earning,
				description,
				reportid
			});
			newEarning
				.save()
				.then(earning => {
					Report.findOneAndUpdate(
						{ _id: reportid },
						{ $push: { earnings: earning._id } },
						{ new: true },
						(err, report) => {
							if (err) return console.log(err);
							return res.json({
								success: true,
								message: "Earning added successfully!"
							});
						}
					);
				})
				.catch(err => console.log(err));
		});
	},
	editEarning: (req, res) => {
		// check if the report is present
		// check if the current user is the author of the report
		// edit the earning
		let { earningid, reportid } = req.params;
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
						"User does not have the permission to edit an earning in this report!"
				});
			}

			Earning.findOneAndUpdate({ _id: earningid }, req.body, (err, earning) => {
				if (err) return console.log(err);
				return res.json({
					success: true,
					message: "Earning updated successfully!"
				});
			});
		});
	},
	deleteEarning: (req, res) => {
		// check if the report is present
		// check if the current user is the author of the report
		// Check if the earning is present
		// remove the earning
		// remove the earning from the report schema
		let { earningid, reportid } = req.params;
		let userId = String(req.user._id);
		let { title, earning, description } = req.body;

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
						"User does not have the permission to add an earning in this report!"
				});
			}

			Earning.findOneAndRemove({ _id: earningid }, (err, earning) => {
				if (err) return console.log(err);
				if (!earning) {
					return res.json({
						success: false,
						message: "Earning not found! Try again!"
					});
				}
				Report.findOneAndUpdate(
					{ _id: reportid },
					{ $pull: { earnings: earningid } },
					(err, report) => {
						if (err) return console.log(err);
						return res.json({
							success: true,
							message: "earning removed successfully!"
						});
					}
				);
			});
		});
	}
};
