import React, { Component } from "react";
// import PropTypes from 'prop-types';
import "../../src/challenge.css";
import HeaderUser from "./HeaderUser";
import Footer from "./Footer";
import axios from "axios";

class ChallengeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: false,
      formData: {
        title: "",
        text: ""
      },
      user: {},
      challenges: []
    };
  }
  componentWillMount() {
    axios
      .get("http://localhost:5001/api/users/authorization")
      .then(res => {
        this.setState({ isAuth: true, user: res.data.user });
      })
      .catch(err => this.setState({ isAuth: false }));
    this.getAll();
  }

  getAll = () => {
    axios.get("http://localhost:5001/api/challenges/all").then(res => {
      console.log(res);
      // this.props.history.push("/challenges");
      this.setState({
        challenges: res.data
      });
    });
  };

  onSubmit = e => {
    console.log("submit");
    e.preventDefault();
    axios
      .post("http://localhost:5001/api/challenges/add", this.state.formData)
      .then(res => {
        this.props.history.push("/challenges");
        this.getAll();
      })
      .catch(err => {
        console.log(err);
        this.setState({ ...err.response.data }, () =>
          console.log(this.state.errors)
        );
      });
  };

  changeHandler = e => {
    var formData = this.state.formData;
    formData[e.target.name] = e.target.value;
    this.setState({ formData });
  };

  render() {
    const { challenges } = this.state;

    return (
      <div>
        <HeaderUser />
        <br /> <br /> <br />
        <div className="container">
          {challenges.map(challenge => (
            <div className="challenge-talk2">
              <a href={`/show-challenge/${challenge._id}`} class="alert-link">
                {challenge.title}
              </a>
              <br />
              <p>
                Started by{" "}
                <a href="index.html" class="alert-link">
                  {challenge.user.name}
                </a>
              </p>
            </div>
          ))}
          <h3 className="challenge-h3">Challenges</h3>
          <div className="container">
            <h5>Create New Topic in "Challenges"</h5>

            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  className="challenge-title"
                  placeholder="Topic Title (Maximum length: 80)"
                  name="title"
                  onChange={this.changeHandler}
                  value={this.state.title}
                  // onChange={this.onChange}
                  // error={errors.title}
                />
                <br />
                <textarea
                  placeholder="Create a Challenge"
                  className="challenge-text"
                  name="text"
                  onChange={this.changeHandler}
                  value={this.state.text}
                  // onChange={this.onChange}
                  // error={errors.text}
                />
              </div>
              <button type="submit" className="btn btn-dark" id="challenge-btn">
                Submit
              </button>
            </form>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default ChallengeForm;