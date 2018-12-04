import React, { Component } from "react";
import { withRouter } from "react-router";
import { reactFirebase } from "../../firebase";


import Login from "./Login";

class LoginContainer extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await reactFirebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <Login onSubmit={this.handleSignUp} />;
  }
}

export default withRouter(LoginContainer);