import React, { Component } from "react";

export default class register extends Component {
	render() {
		return (
			<div className="register">
				<h3>Register</h3>
				<form action="http://localhost:8000/api/v1/register" method="POST">
					<input type="text" name="username" placeholder="Username" />
					<input type="email" name="email" placeholder="Email" />
					<input type="password" name="password" placeholder="Password" />
					<input type="submit" />
				</form>
			</div>
		);
	}
}
