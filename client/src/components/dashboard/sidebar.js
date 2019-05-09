import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { logoutSubmit } from "./../../actions";

class sidebar extends Component {
  handleLogout = e => {
    this.props.dispatch(logoutSubmit(this.handleRedirect));
  };

  handleRedirect = success => {
    if (success) {
      return this.props.history.push("/login");
    }
  };

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__nav">
          <div className="sidebar__nav-item">Home</div>
          <div className="sidebar__nav-item">Add earning/expense</div>
          <div className="sidebar__nav-item">Expenses</div>
          <div className="sidebar__nav-item">Settings</div>
          <div onClick={this.handleLogout} className="sidebar__nav-item">
            Logout
          </div>
        </div>
      </div>
    );
  }
}

sidebar = withRouter(sidebar);

export default connect()(sidebar);
