import React, { Component } from "react";
import MainView from "../components/MainView/MainView";
import Layout from "../components/Layout/Layout";

class MainPage extends Component {
  render() {
    return (
      <Layout>
        <MainView />
      </Layout>
    );
  }
}

export default MainPage;
