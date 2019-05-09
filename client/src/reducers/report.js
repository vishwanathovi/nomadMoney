import Type from "../actions/types";

export default (state = { reports: [] }, action) => {
  switch (action.type) {
    case Type.GETALLREPORTS:
      return {
        ...state,
        reports: action.reports
      };

    case Type.GETALLMYREPORTS:
      return {
        ...state,
        myReports: action.myReports
      };

    default:
      return state;
  }
};
