import React, { Component } from "react";

export default class login extends Component {
	render() {
		return (
			<div className="login">
				<h3>Login</h3>
				<form action="http://localhost:8000/api/v1/login" method="POST">
					<input type="email" name="email" />
					<input type="password" name="password" />
					<input type="submit" />
				</form>
			</div>
		);
	}
}
