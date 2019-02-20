import React, { Component } from "react";
import produce from "immer";
import SigninView from "../components/SigninView";

class SigninContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = e => {
    const { value } = e.target;
    const { name } = e.target;
    this.setState(
      produce(draft => {
        draft[name] = value;
      })
    );
  };

  render() {
    return (
      <SigninView {...this.state} onInputChange={this.handleInputChange} />
    );
  }
}

export default SigninContainer;
