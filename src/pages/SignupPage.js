import React, { Component } from "react";

import Layout from "../components/Layout/Layout";
import SignupContainer from "../containers/SignupContainer";

class SigninPage extends Component {
  render() {
    return (
      <Layout>
        <SignupContainer />
      </Layout>
    );
  }
}

export default SigninPage;
