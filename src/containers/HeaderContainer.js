import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { destroyUser } from "../actions/auth_action";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Header from "../components/Header";

class HeaderContainer extends Component {
  handleRouting = path => {
    // props from withRouter
    const { history } = this.props;
    history.push(path);
  };

  handleLogout = async () => {
    // props from withRouter
    const { history } = this.props;
    // props from action
    const { destroyUser } = this.props;
    await destroyUser();
    history.push("/auth/signin");
  };

  render() {
    // props from redux state
    const { user } = this.props;

    return (
      <Header
        user={user}
        linkTo={this.handleRouting}
        onLogout={this.handleLogout}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      destroyUser
    },
    dispatch
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HeaderContainer)
);
