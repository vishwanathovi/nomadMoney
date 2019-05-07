import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./home";
import AddExpense from "./add-expense";
import Sidebar from "./sidebar";

export default class dashboard extends Component {
	render() {
		return (
			<div className="dashboard container">
				<div className="row">
					<Sidebar />
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
