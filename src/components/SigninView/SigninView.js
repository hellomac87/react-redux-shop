import React, { Component } from "react";
import LoginForm from "../LoginFormView/LoginFormView";

class SigninView extends Component {
  render() {
    return <LoginForm {...this.props} />;
  }
}

export default SigninView;
