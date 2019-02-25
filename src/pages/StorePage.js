import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import StoreContainer from "../containers/StoreContainer";

class StorePage extends Component {
  render() {
    return (
      <Layout>
        <StoreContainer />
      </Layout>
    );
  }
}

export default StorePage;
