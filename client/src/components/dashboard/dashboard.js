import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SplitPane from "react-split-pane";

import AllReports from "./allReports/allReports";
import AddReport from "./addReport/addReport";
import Sidebar from "./sidebar/sidebar";
import MyReports from "./myReports/myReports";

import "./dashboard.scss";

export default class dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <BrowserRouter>
          <SplitPane split="vertical" defaultSize={200}>
            <Sidebar />
            <Switch>
              <Route exact path="/dashboard" component={AllReports} />
              <Route exact path="/dashboard/add-report" component={AddReport} />
              <Route exact path="/dashboard/reports" component={MyReports} />
            </Switch>
          </SplitPane>
        </BrowserRouter>
      </div>
    );
  }
}
