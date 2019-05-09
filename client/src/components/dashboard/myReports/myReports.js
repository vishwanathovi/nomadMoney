import React, { Component } from "react";
import { connect } from "react-redux";

import Report from "./report";
import { fetchAllMyReports } from "./../../../actions";

class Reports extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAllMyReports());
  }

  render() {
    let { reports } = this.props;

    return (
      <div className="home">
        {reports &&
          reports.map(report => <Report key={report._id} report={report} />)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reports: state.report.myReports
});

export default connect(mapStateToProps)(Reports);
