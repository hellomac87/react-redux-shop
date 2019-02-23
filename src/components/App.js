import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getUser } from "../actions/auth_action";
import MainPage from "../pages/MainPage";
import SigninPage from "../pages/SigninPage";
import SignupPage from "../pages/SignupPage";

class App extends Component {
  componentDidMount() {
    // this.refreshUser();
  }

  refreshUser = () => {
    // props from action
    const { getUser } = this.props;
    const token = localStorage.getItem("token");
    if (token) {
      getUser();
    }
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/auth/signin" component={SigninPage} />
          <Route path="/auth/signup" component={SignupPage} />
        </Switch>
      </Router>
    );
  }
}

const mapDispathToProps = dispatch => {
  return bindActionCreators({ getUser }, dispatch);
};
export default connect(
  null,
  mapDispathToProps
)(App);
