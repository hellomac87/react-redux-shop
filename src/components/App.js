import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";
import SigninPage from "../pages/SigninPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/auth/signin" component={SigninPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
