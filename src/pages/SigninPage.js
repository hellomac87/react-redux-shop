import React, { Component } from "react";

import Layout from "../components/Layout/Layout";
import SigninContainer from "../containers/SigninContainer";

class SigninPage extends Component {
  render() {
    return (
      <Layout>
        <SigninContainer />
      </Layout>
    );
  }
}

export default SigninPage;
