import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchAllReports } from "./../../actions";

class home extends Component {
	componentDidMount() {
		this.props.dispatch(fetchAllReports());
	}

	render() {
		let { reports } = this.props;
		console.log("Reports: ", reports);

		return <div className="home" />;
	}
}

const mapStateToProps = state => ({
	reports: state.report.reports
});

export default connect(mapStateToProps)(home);
