import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import PrivRouter from "./PrivRouter"
import { reactFirebase } from "../src/firebase";
import Login from "./components/Login/Login";


class App extends Component {
  state = { loading: true, authenticated: false, user: null };

  componentWillMount() {
    reactFirebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
}

render() {
  const { authenticated, loading } = this.state;

  if (loading) {
    return <p>Loading..</p>;
  }

  return (
    <Router>
      <div>
        <PrivRouter
          exact
          path="/"
          component={Home}
          authenticated={authenticated}
        />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
  );
}
}

export default App;