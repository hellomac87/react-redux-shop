import React, { Component } from "react";
// react-router-dom
import { withRouter } from "react-router-dom";
// redux
import { bindActionCreators } from "redux";
// react-redux
import { connect } from "react-redux";
// action
import { fetchProducts } from "../actions/products_action";
// reducer
import { getProducts, getIsFetching } from "../reducers/products_reducer";

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
    console.log(this.props);
    // props from action
    const { fetchProducts } = this.props;
    await fetchProducts(category);
  }

  async componentDidUpdate(prevProps) {}

  render() {
    const { loading } = this.props;
    if (loading) {
      return <LoadingSpinner />;
    }
    return <ProductListView />;
  }
}

const mapStateToProps = (state, { match }) => {
  const {
    params: { category = category || "all" }
  } = match;

  return {
    loading: state.loading
    // products: getProducts(state, category)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchProducts
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
