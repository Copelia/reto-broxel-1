import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivRouter({
  component: Component,
  authenticated,
  ...rest
}) {
  console.log('authenticated', authenticated);
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}