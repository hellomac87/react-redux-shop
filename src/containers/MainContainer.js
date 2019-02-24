import React, { Component } from "react";
// redux
import { bindActionCreators } from "redux";
// react-redux
import { connect } from "react-redux";
// action
import { getProduct } from "../actions/product_action";

import MainView from "../components/MainView/MainView";

class MainContainer extends Component {
  async componentDidMount() {
    console.log("main container");
    const { getProduct } = this.props;
    await getProduct();
  }
  render() {
    const { product } = this.props;
    return <MainView product={product} />;
  }
}

const mapStateToProps = state => {
  return {
    product: state.product
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
