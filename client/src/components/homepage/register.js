import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { registerSubmit } from "./../../actions";

class register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userCredentials: {
				username: "",
				email: "",
				password: ""
			}
		};
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.dispatch(
			registerSubmit(this.state.userCredentials, this.handleRedirect)
		);
	};

	handleRedirect = (success, message = "") => {
		if (success) {
			return this.props.history.push("/login");
		}
		console.log("Error: ", message);
	};

	updateState = e => {
		this.setState({
			userCredentials: {
				...this.state.userCredentials,
				[e.target.name]: e.target.value
			}
		});
	};

	render() {
		return (
			<div className="register">
				<h3>Register</h3>
				<form onSubmit={this.handleSubmit}>
					<input
						onChange={this.updateState}
						type="text"
						name="username"
						placeholder="Username"
					/>
					<input
						onChange={this.updateState}
						type="email"
						name="email"
						placeholder="Email"
					/>
					<input
						onChange={this.updateState}
						type="password"
						name="password"
						placeholder="Password"
					/>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

register = withRouter(register);

export default connect()(register);
