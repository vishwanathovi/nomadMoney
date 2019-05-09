import React, { Component } from "react";
import { connect } from "react-redux";

import Report from "./report";
import { fetchAllReports } from "./../../../actions";

class home extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAllReports());
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
  reports: state.report.reports
});

export default connect(mapStateToProps)(home);
