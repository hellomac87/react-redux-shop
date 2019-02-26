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
  constructor(props) {
    super(props);

    this.state = {
      pageOption: {
        category: null,
        page: 1,
        pageLimit: null
      }
    };
  }
  async componentDidMount() {
    // state from instance
    const { pageOption } = this.state;
    // props from action
    const { getProduct } = this.props;

    await getProduct(
      pageOption.category,
      pageOption.page,
      pageOption.pageLimit
    );
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
    loading: state.loading,
    total_count: state.product.total_count
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
