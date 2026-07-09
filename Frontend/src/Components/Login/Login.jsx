import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="Login">
      <div className="Login-container">

        <h1 className="Login-title">
          Login
        </h1>

        <form className="Login-form">

          <div className="Login-formGroup">
            <label>Email</label>

            <input
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="Login-formGroup">
            <label>Password</label>

            <input
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="Login-forgot">
            <a href="/">
              Forgot your password?
            </a>
          </div>

          <button
            type="submit"
            className="Login-btn"
          >
            SIGN IN
          </button>

          <div className="Login-register">
            <a href="/">
              New customer? Sign up for an account
            </a>
          </div>

        </form>

      </div>
    </div>
  );
};

export default Login;