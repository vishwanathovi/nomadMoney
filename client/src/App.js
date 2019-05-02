import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import login from "./components/login";
import register from "./components/register";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Switch>
						<Route path="/" component={register} />
						<Route exact path="/login" component={login} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
