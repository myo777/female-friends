import "../../assets/css/profile/index.css";
import axios from "axios";
import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: false,
      user: {}
    };
  }
  componentWillMount() {
    axios
      .get("http://localhost:5001/api/users/authorization")
      .then(res => {
        this.setState({ isAuth: true, user: res.data.user });
      })
      .catch(err => this.setState({ isAuth: false }));
  }

  render() {
    return (
      <div className="header-profile">
        <div className="header-top">
          <h3>{this.state.user && this.state.user.name}</h3>
          <a href="/edit-profile">Edit Profile</a>
        </div>

        <div className="header-background">
          <div className="header__avatar" />
        </div>
      </div>
    );
  }
}
