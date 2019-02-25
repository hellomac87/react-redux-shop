import React, { Component } from "react";
// react-router-dom
import { withRouter } from "react-router-dom";
// redux
import { bindActionCreators } from "redux";
// react-redux
import { connect } from "react-redux";
// action
import { getProduct } from "../actions/product_action";

import MainView from "../components/MainView/MainView";
import LoadingSpinner from "../components/LoadingSpinner";

class MainContainer extends Component {
  async componentDidMount() {
    // props from action
    const { getProduct } = this.props;
    await getProduct();
  }

  render() {
    const { product, loading } = this.props;
    if (loading) {
      return <LoadingSpinner />;
    }
    return <MainView product={product} />;
  }
}

const mapStateToProps = state => {
  return {
    product: state.product,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getProduct
    },
    dispatch
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainContainer)
);
