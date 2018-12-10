import React, { Component } from "react";
import HeaderHome from "./HeaderHome";
import Footer from "./Footer";
import "../assets/css/log-res-body/index.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
axios.defaults.withCredentials = true;

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        name: "",
        email: "",
        password: "",
        confirmpassword: ""
      },
      errors: {},
      success: false
    };
  }

  changeHandler = e => {
    let formData = this.state.formData;
    formData[e.target.name] = e.target.value;
    this.setState({ formData });
  };

  registerUser = e => {
    console.log("register");
    e.preventDefault();
    // const
    axios
      .post("http://localhost:5001/api/users/register", this.state.formData)
      .then(res => {
        console.log(res);
        this.setState({ success: true });
        this.props.history.push("/register-payment");
      })
      .catch(err => {
        this.setState({ ...err.response.data }, () =>
          console.log(this.state.errors)
        );
      });
  };

  render() {
    let { success, formData, errors } = this.state;

    return (
      <div>
        <HeaderHome />

        <div className="body__content">
          <div className="body__content-image">
            <img
              src="https://images.unsplash.com/photo-1525078603777-7525bc242652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=879&q=80"
              alt="Registration page"
            />
          </div>

          <div className="body__content-text">
            <h2 className="register-title">
              Register below to become a member of Female Friends today
            </h2>
            {errors.auth && <p>{errors.auth.msg}</p>}
            {success && <p>You are registered successfully!</p>}
            <form onSubmit={this.registerUser}>
              <label for="name">Your full name</label>
              <br />
              {errors.name && <p>{errors.name.msg}</p>}
              <input
                type="text"
                className="logres"
                name="name"
                value={formData.name}
                onChange={this.changeHandler}
                required
              />
              <br />
              <label for="email">Your email address</label>
              <br />
              {errors.email && <p>{errors.email.msg}</p>}
              <input
                type="text"
                name="email"
                className="logres"
                value={this.state.formData.email}
                onChange={this.changeHandler}
                required
              />
              <br />
              <label for="password">Your password (min. 6 characters)</label>
              <br />
              {errors.password && <p>{errors.password.msg}</p>}

              <input
                type="password"
                name="password"
                className="logres"
                value={this.state.formData.password}
                onChange={this.changeHandler}
                required
              />
              <br />
              <label for="confirmpassword">Confirm your password</label>
              {errors.confirmpassword && <p>{errors.confirmpassword.msg}</p>}
              <br />
              <input
                type="password"
                name="confirmpassword"
                className="logres"
                value={this.state.formData.confirmpassword}
                onChange={this.changeHandler}
                required
              />
              <button type="submit" className="body__content-cta">
                Register
              </button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default withRouter(Register);
