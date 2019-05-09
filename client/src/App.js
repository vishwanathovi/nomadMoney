import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import login from "./components/login";
import Register from "./components/homepage/register";
import Homepage from "./components/homepage/homepage";
import Dashboard from "./components/dashboard/dashboard";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/login" component={Homepage} />
            <Route exact path="/register" component={Homepage} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
