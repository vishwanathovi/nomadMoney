import { combineReducers } from "redux";

import user from "./user";
import report from "./report";

export default combineReducers({
	user,
	report
});
