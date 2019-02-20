import React, { Component } from "react";
import { getUserToken } from "../actions";
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

  render() {
    const { getUserToken } = this.props;
    return (
      <SigninView
        {...this.state}
        getUserToken={getUserToken}
        onInputChange={this.handleInputChange}
      />
    );
  }
}

const mapDispathToProps = dispatch => {
  return bindActionCreators(
    {
      getUserToken
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispathToProps
)(SigninContainer);
