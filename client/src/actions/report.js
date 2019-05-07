import Type from "./types";
const URL = "http://localhost:8000/";

//  fetch All reports
export function fetchAllReports() {
	return dispatch => {
		fetch(URL + "api/v1/reports", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(response => {
				console.log(response);
				return response.json();
			})
			.catch(err => {
				return { success: false, message: "Server error!" };
			})
			.then(data => {
				dispatch({
					type: Type.GETALLREPORTS,
					reports: data.reports
				});
			});
	};
}
