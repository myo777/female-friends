import React, { Component } from "react";
import axios from "axios";

import "../../src/challenge.css";
import HeaderUser from "./HeaderUser";
import Footer from "./Footer";

class ChallengeOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: false,
      user: {},
      challenge: []
    };
  }

  componentWillMount() {
    axios
      .get("http://localhost:5001/api/users/authorization")
      .then(res => {
        this.setState({ isAuth: true, user: res.data.user });
      })
      .catch(err => this.setState({ isAuth: false }));
    axios
      .get(`http://localhost:5001/api/challenges/${this.props.match.params.id}`)
      .then(res => {
        console.log(res.data);
        // this.props.history.push("/challenges");
        this.setState({
          challenge: res.data
        });
      });
  }

  render() {
    const { challenge } = this.state;
    return (
      <div>
        <HeaderUser />
        <div className="container">
          <br /> <br /> <br />
          <h3>{challenge.title}</h3>
          <div className="container" id="challengeOne">
            <div className="row">
              <div className="col-md-1">
                <div className="forimg" />
                <p>{this.state.user.name}</p>
              </div>
              <div className="col-md-10">
                <p>{challenge.text}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <h3>Reply To: {challenge.title}</h3>
            <div className="forimg1" />
          </div>
          <button type="submit" className="btn btn-dark" id="challenge-btn">
            Submit
          </button>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ChallengeOne;