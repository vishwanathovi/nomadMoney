import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./home";
import AddExpense from "./add-expense";

export default class dashboard extends Component {
	render() {
		return (
			<div className="dashboard container">
				<div className="row">
					<div className="sidebar col-md-3">
						<div className="sidebar__nav">
							<div className="sidebar__nav-item">Home</div>
							<div className="sidebar__nav-item">Add earning/expense</div>
							<div className="sidebar__nav-item">Expenses</div>
							<div className="sidebar__nav-item">Settings</div>
						</div>
					</div>
					<div className="col-md-9">
						<BrowserRouter>
							<Switch>
								<Route exact path="/dashboard" component={Home} />
								<Route
									exact
									path="/dashboard/add-expense"
									component={AddExpense}
								/>
							</Switch>
						</BrowserRouter>
					</div>
				</div>
			</div>
		);
	}
}
