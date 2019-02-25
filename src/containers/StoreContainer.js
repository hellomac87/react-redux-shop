import React, { Component } from "react";
// react-router-dom
import { withRouter } from "react-router-dom";
// redux
import { bindActionCreators } from "redux";
// react-redux
import { connect } from "react-redux";
// action
import { getProduct } from "../actions/product_action";

import ProductListView from "../components/ProductListView";
import LoadingSpinner from "../components/LoadingSpinner";

class StoreContainer extends Component {
  async componentDidMount() {
    // props from router
    const {
      match: {
        params: { category }
      }
    } = this.props;
    // props from action
    const { getProduct } = this.props;
    await getProduct(category);
  }

  async componentDidUpdate(prevProps) {
    // props from router
    const {
      match: {
        params: { category: prevCategory }
      }
    } = prevProps;
    // props from router
    const {
      match: {
        params: { category }
      }
    } = this.props;
    // props from action
    const { getProduct } = this.props;

    if (category !== prevCategory) {
      await getProduct(category);
    }
  }

  render() {
    const { product, loading } = this.props;
    if (loading) {
      return <LoadingSpinner />;
    }
    return <ProductListView product={product} />;
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
  )(StoreContainer)
);
