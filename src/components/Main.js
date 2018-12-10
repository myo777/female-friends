import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeaderUser from "./HeaderUser";
import Footer from "./Footer";
import axios from "axios";
import "../assets/css/main/index.css";

// import axios from 'axios'

class Main extends Component {
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
    const { user } = this.state;
    return (
      <div className="dashboard">
        <HeaderUser />
        <div className="container">
          <div className="row">
            {" "}
            {/* Begin of first row */}
            <div className="col-md-12">
              {/* <h1 className="display-4">Welcome Back, {user.name}</h1> */}
              <h2 className="main-title-h2">Welcome back, &nbsp;{user.name}</h2>
              <br />
              <div className="row">
                {" "}
                {/* Begin of second row */}
                <div className="col-md-3">
                  <h3 className="main-title-h3">Events</h3>
                  <p>
                    As a Female Friend you can attend an event by just one
                    click. Find events near you:
                  </p>
                  <Link
                    to="/events"
                    className="main-link" /*className="btn btn-lg btn-info"*/
                  >
                    Attend events
                  </Link>
                </div>{" "}
                {/* end of div col-md-3 */}
                <div className="col-md-3">
                  <h3 className="main-title-h3">Find Friends</h3>
                  <p>
                    As a Female Friend you can find friends, mentors and
                    mentees.
                  </p>
                  <Link
                    to="/friends"
                    className="main-link" /*className="btn btn-lg btn-info"*/
                  >
                    Friends
                  </Link>
                </div>{" "}
                {/* end of div col-md-3 */}
                <div className="col-md-3">
                  <h3 className="main-title-h3">Personal Profile</h3>
                  <p>
                    Take a look at your personal profile and add a profile
                    picture.
                  </p>
                  <Link
                    to="/my-profile"
                    className="main-link" /*className="btn btn-lg btn-info"*/
                  >
                    My Profile
                  </Link>
                </div>{" "}
                {/* end of div col-md-3 */}
                <div className="col-md-3">
                  <h3 className="main-title-h3">Challenges</h3>
                  <p>
                    Do you have a challenge or question for the Female Ventures
                    community? Post it here!
                  </p>
                  <Link
                    to="/challenges"
                    className="main-link" /*className="btn btn-lg btn-info"*/
                  >
                    Challenges
                  </Link>
                </div>{" "}
                {/* end of div col-md-3 */}
              </div>{" "}
              {/* end of div row */}
              <br />
              <br />
              {/* Begin of third row */}
              <div className="row">
                <div className="col-md-3">
                  <h3 className="main-title-h3">Resource directory</h3>
                  <p>
                    Useful information and links (free templates, free courses,
                    free tools, etc
                  </p>
                  <Link
                    to="/resources"
                    className="main-link" /*className="btn btn-lg btn-info"*/
                  >
                    Resources
                  </Link>
                </div>{" "}
                {/* end of div col-md-3 */}
                <div className="col-md-3">
                  <h3 className="main-title-h3">Booklist</h3>
                  <p>Book recommendations from the Female Friends community</p>
                  <Link
                    to="/booklist"
                    className="main-link" /*className="btn btn-lg btn-info"*/
                  >
                    Booklist
                  </Link>
                </div>{" "}
                {/* end of div col-md-3 */}
                <div className="col-md-3">
                  <h3 className="main-title-h3">Suggestions</h3>
                  <p>Suggestions, tips and tricks from the community</p>
                  <Link
                    to="/suggestions"
                    className="main-link" /*className="btn btn-lg btn-info"*/
                  >
                    Suggestions
                  </Link>
                </div>{" "}
                {/* end of div col-md-3 */}
              </div>{" "}
              {/* end of div row */}
            </div>
            {/* end of div col-md-12 */}
          </div>{" "}
          {/* end of div row */}
        </div>{" "}
        {/* end of div container */}
        <Footer />
      </div> // end of div dashboard
    );
  }
}

export default Main;
