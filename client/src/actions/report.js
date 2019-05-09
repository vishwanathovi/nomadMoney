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
      .then(response => response.json())
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

//  fetch All my reports
export function fetchAllMyReports() {
  return dispatch => {
    fetch(URL + "api/v1/my-reports", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .catch(err => {
        return { success: false, message: "Server error!" };
      })
      .then(data => {
        dispatch({
          type: Type.GETALLMYREPORTS,
          myReports: data.reports
        });
      });
  };
}
