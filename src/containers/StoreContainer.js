import React, { Component } from "react";
// react-router-dom
import { withRouter } from "react-router-dom";
// redux
import { bindActionCreators } from "redux";
// react-redux
import { connect } from "react-redux";
// action
import { getProduct } from "../actions/product_action";
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
    // props from action
    const { getProduct, fetchProducts } = this.props;
    await getProduct(category);
    await fetchProducts(category);
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
    const { getProduct, fetchProducts } = this.props;

    if (category !== prevCategory) {
      await getProduct(category);
      // await fetchProducts(category);
    }
  }

  render() {
    const { product, loading } = this.props;
    if (loading) {
      return <LoadingSpinner />;
    }
    return <ProductListView product={product} />;
    // return <ProductListView products={this.props.products} />;
  }
}

const mapStateToProps = (state, { match }) => {
  const {
    params: { category = category || "all" }
  } = match;

  return {
    product: state.product,
    loading: state.loading
    // products: getProducts(state, category)
    // isFetching: getIsFetching(state, category)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getProduct,
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
