import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import login from "./components/login";
import register from "./components/register";
import homepage from "./components/homepage";
import dashboard from "./components/dashboard";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Switch>
						<Route exact path="/" component={homepage} />
						<Route path="/register" component={register} />
						<Route path="/dashboard" component={dashboard} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
