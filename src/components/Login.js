import React, { Component } from "react";
import HeaderHome from "./HeaderHome";
import Footer from "./Footer";
import { withRouter } from "react-router-dom";
import "../assets/css/log-res-body/index.css";

import axios from "axios";
axios.defaults.withCredentials = true;

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        email: "",
        password: ""
      },
      errors: []
    };
  }

  changeHandler = e => {
    let formData = this.state.formData;
    formData[e.target.name] = e.target.value;
    this.setState({ formData });
  };

  loginUser = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5001/api/users/login", this.state.formData)
      .then(res => {
        this.props.history.push("/main");
        // or
        // window.location.href="/";
      })
      .catch(err => {
        console.log(err);
        this.setState({ ...err.response.data }, () =>
          console.log(this.state.errors)
        );
      });
  };

  render() {
    let { errors } = this.state;

    return (
      <div>
        <HeaderHome />

        <div className="body__content">
          <div className="body__content-image">
            <img
              src="https://images.unsplash.com/photo-1537177627670-042c1278fb50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"
              alt="Login page"
            />
          </div>

          <div className="body__content-text">
            <h2 className="login-title">
              We are happy to see you again! Join your Female Friends by logging
              in
            </h2>

            {errors.auth && <p>{errors.auth.msg}</p>}
            <form onSubmit={this.loginUser}>
              <label for="email">Your email address</label>
              <br />
              {errors.email && <p>{errors.email.msg}</p>}
              <input
                type="text"
                name="email"
                class="logres"
                onChange={this.changeHandler}
                required
              />
              <br />

              <label for="name">Your password (min. 6 characters)</label>
              <br />
              {errors.password && <p>{errors.password.msg}</p>}
              <input
                type="password"
                name="password"
                class="logres"
                onChange={this.changeHandler}
                required
              />
              <button type="submit" className="body__content-cta">
                Login
              </button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default withRouter(Login);
