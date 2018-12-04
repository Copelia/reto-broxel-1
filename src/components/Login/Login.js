import React from "react";
const Login = ({ onSubmit }) => {
    return (
      <div>
        <h1>Ingresa a tu cuenta</h1>
        <form onSubmit={onSubmit}>
          <label>
            Email
            <input
              name="email"
              placeholder="Email"
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              placeholder="Password"
            />
          </label>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  };
  
  export default Login;