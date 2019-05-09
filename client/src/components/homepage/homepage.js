import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import "./homepage.scss";

class homepage extends Component {
  render() {
    let { pathname } = this.props.location;

    return (
      <div className="homepage">
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
        <div>Image</div>
      </div>
    );
  }
}

export default withRouter(homepage);
