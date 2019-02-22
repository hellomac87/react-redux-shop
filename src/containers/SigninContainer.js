import React, { Component } from "react";
import { createUserToken } from "../actions/auth_action";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
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

  handleFormSubmit = async e => {
    const { username, password } = this.state;
    const { createUserToken } = this.props;
    e.preventDefault();

    await createUserToken(username, password);
  };

  render() {
    return (
      <SigninView
        {...this.state}
        onFormSubmit={this.handleFormSubmit}
        onInputChange={this.handleInputChange}
      />
    );
  }
}

const mapDispathToProps = dispatch => {
  return bindActionCreators({ createUserToken }, dispatch);
};

export default connect(
  null,
  mapDispathToProps
)(SigninContainer);