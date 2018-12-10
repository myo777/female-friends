import axios from "axios";

import React, { Component } from "react";

export default class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: false,
      profile: {},
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

    axios.get(`http://localhost:5001/api/users/profile`).then(res => {
      console.log(res.data);
      this.setState({
        profile: res.data
      });
    });
  }

  render() {
    const { user, profile } = this.state;
    const dateOfBirth = profile.dateOfBirth ? profile.dateOfBirth : null;
    const linkedin = profile.linkedin ? profile.linkedin : null;
    const biography = profile.biography ? profile.biography : null;
    const university = profile.university ? profile.university : null;
    const expertise = profile.expertise ? profile.expertise : null;
    const experience = profile.experience ? profile.experience : null;
    const industry = profile.industry ? profile.industry : null;
    const supportSeek = profile.supportSeek ? profile.supportSeek : null;
    const supportGive = profile.supportGive ? profile.supportGive : null;
    const role = profile.role ? profile.role : null;
    const recruitment = profile.recruitment ? profile.recruitment : null;

    return (
      <main className="info">
        <span className="info-label">Name </span>
        <span className="info-value">{user.name}</span>
        <br />
        <span className="info-label">Date of Birth </span>
        <span className="info-value">{dateOfBirth}</span>
        <br />
        <span className="info-label">linkedin </span>
        <span className="info-value">{linkedin}</span>
        <br />
        <span className="info-label">Biography </span>
        <span className="info-value">{biography}</span>
        <br />
        <span className="info-label">University</span>
        <span className="info-value">{university}</span>
        <br />
        <span className="info-label">Expertise </span>
        <span className="info-value">{expertise}</span>
        <br />
        <span className="info-label">Experience </span>
        <span className="info-value">{experience}</span>
        <br />
        <span className="info-label">Industry </span>
        <span className="info-value">{industry}</span>
        <br />
        <span className="info-label">Support Seek </span>
        <span className="info-value">{supportSeek}</span>
        <br />
        <span className="info-label">Support Give </span>
        <span className="info-value">{supportGive}</span>
        <br />
        <span className="info-label">Role </span>
        <span className="info-value">{role}</span>
        <br />
        <span className="info-label">Recruitment</span>
        <span className="info-value">{recruitment}</span>
        <br />
      </main>
    );
  }
}
