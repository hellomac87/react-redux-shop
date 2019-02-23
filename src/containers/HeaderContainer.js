import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { destroyUser } from "../actions/auth_action";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Header from "../components/Header";

class HeaderContainer extends Component {
  linkTo = path => {
    // props from withRouter
    const { history } = this.props;
    history.push(path);
  };

  render() {
    // props from redux state
    const { user, destroyUser } = this.props;

    return (
      <Header user={user} linkTo={this.linkTo} destroyUser={destroyUser} />
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
