import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../../api/axiosConfig";

import "./SignIn.css";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await api.post("/api/v1/auth/register", user);
    <Link to="/signin"></Link>;
  };

  return (
    <div className=" container-signIn">
      <div className="row">
        <div className="col">
          <h2>Sign In</h2>
          <form onSubmit={(event) => onSubmit(event)}>
            <div>
              <label className="form-label">E-mail</label>
              <br />
              <input
                type={"email"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(event) => onInputChange(event)}
              ></input>
            </div>
            <div>
              <div>
                <label for="password">Password (8 characters minimum):</label>
                <br />
                <input
                  type="password"
                  id="pass"
                  name="password"
                  minLength="8"
                  required
                  value={password}
                  onChange={(event) => onInputChange(event)}
                ></input>
              </div>
            </div>
            <div className="buttons-register">
              <Link className="sign-in" to="/signin">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
