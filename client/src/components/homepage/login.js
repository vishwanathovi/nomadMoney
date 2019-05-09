import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginSubmit } from "./../../actions";

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCredentials: {
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(
      loginSubmit(this.state.userCredentials, this.handleRedirect)
    );
  };

  handleRedirect = (success, message = "") => {
    if (success) {
      return this.props.history.push("/dashboard");
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
      <div className="login">
        <h3>Login</h3>
        <form onSubmit={this.handleSubmit} method="POST">
          <input onChange={this.updateState} type="email" name="email" />
          <input onChange={this.updateState} type="password" name="password" />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

login = withRouter(login);

export default connect()(login);
