import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { createUser } from "../actions/auth_action";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import produce from "immer";
import SignFormView from "../components/SignFormView";

class SignupContainer extends Component {
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
    // props from withRouter
    const { history } = this.props;
    // props from action
    const { createUser } = this.props;
    e.preventDefault();

    try {
      await createUser(username, password);
      alert("회원가입에 성공했습니다. 로그인 후 서비스를 이용 해 주세요.");
      history.push("/auth/signin");
    } catch (e) {}
  };

  render() {
    const { loading } = this.props;
    return (
      <SignFormView
        type="signup"
        {...this.state}
        loading={loading}
        onFormSubmit={this.handleFormSubmit}
        onInputChange={this.handleInputChange}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.loading
  };
};

const mapDispathToProps = dispatch => {
  return bindActionCreators({ createUser }, dispatch);
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispathToProps
  )(SignupContainer)
);
