import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Login from "./userAuth/login";
import Register from "./userAuth/register";

class homepage extends Component {
	render() {
		let { pathname } = this.props.location;

		return (
			<div className="homepage container">
				<div className="row">
					<div className="col-md-3">
						<div className="login-main">
							<div className="logo">Logo here</div>
							<div className="description">
								Handle all your earning/expenses here
							</div>
							{pathname === "/register" ? <Register /> : <Login />}
							<div className="register-instead">
								New here? - <Link to={`/register`}>Register instead</Link>
							</div>
						</div>
					</div>
					<div className="col-md-9">Image</div>
				</div>
			</div>
		);
	}
}

export default withRouter(homepage);
