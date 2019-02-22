import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../components/Header";

class HeaderContainer extends Component {
  render() {
    // props from redux state
    const { user } = this.props;
    // props from withRouter
    const { history } = this.props;
    return <Header user={user} history={history} />;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default withRouter(connect(mapStateToProps)(HeaderContainer));
