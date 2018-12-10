//http://localhost:3000/friends
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HeaderUser from "./HeaderUser";
import Footer from "./Footer";

const imageStyle = {
  width: "80px",
  height: "80px",
  margin: "auto",
  marginTop: "-50px"
};

const fontStyle = {
  color: "#8cb2b8",
  fontFamily: "Oswald",
  fontWeight: 300,
  fontSize: "2rem"
};

const spaceStyle = {
  marginLeft: "20px"
};

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: null
    };
    this.getAllUsers = this.getAllUsers.bind(this);
  }

  getAllUsers() {
    axios.get("http://localhost:5000/api/users/getAllUsers").then(User => {
      this.setState({ User: User.data.User });
      console.log(User.data.User);
    });
  }

  componentDidMount() {
    this.getAllUsers();
  }

  render() {
    return (
      <div>
        <HeaderUser />
        <div className="container">
          <br />
          <div class="col-md-5" />
          <div class="col-md-5 col-md-offset-2" />

          <div className="row">
            <form className="form-inline">
              <div className="form-group col-sm-offset-2" style={spaceStyle}>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="First name"
                  name="email"
                />
              </div>
              <div className="form-group col-sm-offset-2" style={spaceStyle}>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  placeholder="Last name"
                  name="lastname"
                />
              </div>
              <div className="form-group col-sm-offset-2" style={spaceStyle}>
                <input
                  type="text"
                  className="form-control"
                  id="industry"
                  placeholder="Industry"
                  name="industry"
                />
              </div>
              <div className="form-group col-sm-offset-2" style={spaceStyle}>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="City"
                  name="city"
                />
              </div>
              {/* <button type="submit" className="btn btn-info col-sm-offset-2 " style={spaceStyle}>Search</button> */}
              <Link
                to={"/friends"}
                className="btn btn-info col-sm-offset-2"
                style={spaceStyle}
              >
                Search
              </Link>
              <br />
            </form>
          </div>
          <br />
          <h3 style={fontStyle}>My friends</h3>
          <br />
          <div className="row">
            {/* card 1 */}
            <div className="col-sm-4">
              <div className="card text-center">
                <img
                  className="card-img-top"
                  src="https://femaleventures.nl/wp-content/uploads/2018/01/email-foto.jpg"
                  alt="Card cap"
                />
                <div className="card-body">
                  <img
                    src="https://avatars1.githubusercontent.com/u/40645107?s=460&v=4"
                    style={imageStyle}
                    className="rounded-circle"
                    alt="sellie"
                  />
                  <h5 className="card-title">Isyani Noviasellie</h5>
                  <Link to={"/chat"} className="btn btn-info btn-sm">
                    Message
                  </Link>
                  <br />
                  <br />
                  <Link to={"/show-friend"} className="btn btn-info btn-sm">
                    Show Friend
                  </Link>
                  <br />
                </div>
              </div>
            </div>{" "}
            {/* end of form div */}
            <br />
            {/* card 2 */}
            <div className="col-sm-4">
              <div className="card text-center">
                <img
                  className="card-img-top"
                  src="https://femaleventures.nl/wp-content/uploads/2018/01/email-foto.jpg"
                  alt="Card cap"
                />
                <div className="card-body">
                  <img
                    src="https://avatars0.githubusercontent.com/u/22559604?s=400&v=4"
                    style={imageStyle}
                    className="rounded-circle"
                    alt="sellie"
                  />
                  <h5 className="card-title">Pauline Wang</h5>
                  <Link to={"/chat"} className="btn btn-info btn-sm">
                    Message
                  </Link>
                  <br />
                  <br />
                  <Link to={"/show-friend"} className="btn btn-info btn-sm">
                    Show Friend
                  </Link>
                  <br />
                </div>
              </div>
            </div>
            {/* card 3 */}
            <div className="col-sm-4">
              <div className="card text-center">
                <img
                  className="card-img-top"
                  src="https://femaleventures.nl/wp-content/uploads/2018/01/email-foto.jpg"
                  alt="Card cap"
                />
                <div className="card-body">
                  <img
                    src="https://avatars0.githubusercontent.com/u/40164608?s=400&v=4"
                    style={imageStyle}
                    className="rounded-circle"
                    alt="sellie"
                  />
                  <h5 className="card-title">Juan Li</h5>
                  <Link to={"/chat"} className="btn btn-info btn-sm">
                    Message
                  </Link>
                  <br />
                  <br />
                  <Link to={"/show-friend"} className="btn btn-info btn-sm">
                    Show Friend
                  </Link>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <h3 style={fontStyle}>Female friends</h3>
          <br />
          {/* row 2 */}
          <div className="row">
            {/* card 4 */}
            <div className="col-sm-4">
              <div className="card text-center">
                <img
                  className="card-img-top"
                  src="https://femaleventures.nl/wp-content/uploads/2018/01/email-foto.jpg"
                  alt="Card cap"
                />
                <div className="card-body">
                  <img
                    src="https://avatars1.githubusercontent.com/u/38748551?s=400&v=4"
                    style={imageStyle}
                    className="rounded-circle"
                    alt="sellie"
                  />
                  <h5 className="card-title">Lwin Myo</h5>
                  <Link to={"/chat"} className="btn btn-info btn-sm">
                    Message
                  </Link>
                  <br />
                  <br />
                  <Link to={"/add-friend"} className="btn btn-info btn-sm">
                    Add friend
                  </Link>
                  <br />
                </div>
              </div>
            </div>
            {/* card 5 */}
            <div className="col-sm-4">
              <div className="card text-center">
                <img
                  className="card-img-top"
                  src="https://femaleventures.nl/wp-content/uploads/2018/01/email-foto.jpg"
                  alt="Card cap"
                />
                <div className="card-body">
                  <img
                    src="https://femaleventures.nl/wp-content/plugins/ultimate-member/assets/img/default_avatar.jpg"
                    style={imageStyle}
                    className="rounded-circle"
                    alt="sellie"
                  />
                  <h5 className="card-title">Jane Doe</h5>
                  <Link to={"/chat"} className="btn btn-info btn-sm">
                    Message
                  </Link>
                  <br />
                  <br />
                  <Link to={"/add-friend"} className="btn btn-info btn-sm">
                    Add friend
                  </Link>
                  <br />
                </div>
              </div>
            </div>
            {/* card 6 */}
            <div className="col-sm-4">
              <div className="card text-center">
                <img
                  className="card-img-top"
                  src="https://femaleventures.nl/wp-content/uploads/2018/01/email-foto.jpg"
                  alt="Card cap"
                />
                <div className="card-body">
                  <img
                    src="https://femaleventures.nl/wp-content/plugins/ultimate-member/assets/img/default_avatar.jpg"
                    style={imageStyle}
                    className="rounded-circle"
                    alt="sellie"
                  />
                  <h5 className="card-title">Jane Doe</h5>
                  <Link to={"/chat"} className="btn btn-info btn-sm">
                    Message
                  </Link>
                  <br />
                  <br />
                  <Link to={"/add-friend"} className="btn btn-info btn-sm">
                    Add friend
                  </Link>
                  <br />
                </div>
              </div>
            </div>
          </div>

          <br />
          {/* row 3 */}
          <div className="row">
            {/* card 7 */}
            <div className="col-sm-4">
              <div className="card text-center">
                <img
                  className="card-img-top"
                  src="https://femaleventures.nl/wp-content/uploads/2018/01/email-foto.jpg"
                  alt="Card cap"
                />
                <div className="card-body">
                  <img
                    src="https://femaleventures.nl/wp-content/plugins/ultimate-member/assets/img/default_avatar.jpg"
                    style={imageStyle}
                    className="rounded-circle"
                    alt="selliet"
                  />
                  <h5 className="card-title">Jane Doe</h5>
                  <Link to={"/chat"} className="btn btn-info btn-sm">
                    Message
                  </Link>
                  <br />
                  <br />
                  <Link to={"/add-friend"} className="btn btn-info btn-sm">
                    Add friend
                  </Link>
                  <br />
                </div>
              </div>
            </div>
            {/* card 8 */}
            <div className="col-sm-4">
              <div className="card text-center">
                <img
                  className="card-img-top"
                  src="https://femaleventures.nl/wp-content/uploads/2018/01/email-foto.jpg"
                  alt="Card cap"
                />
                <div className="card-body">
                  <img
                    src="https://femaleventures.nl/wp-content/plugins/ultimate-member/assets/img/default_avatar.jpg"
                    style={imageStyle}
                    className="rounded-circle"
                    alt="selliet"
                  />
                  <h5 className="card-title">Jane Doe</h5>
                  <Link to={"/chat"} className="btn btn-info btn-sm">
                    Message
                  </Link>
                  <br />
                  <br />
                  <Link to={"/add-friend"} className="btn btn-info btn-sm">
                    Add friend
                  </Link>
                  <br />
                </div>
              </div>
            </div>
            {/* card 9 */}
            <div className="col-sm-4">
              <div className="card text-center">
                <img
                  className="card-img-top"
                  src="https://femaleventures.nl/wp-content/uploads/2018/01/email-foto.jpg"
                  alt="Card cap"
                />
                <div className="card-body">
                  <img
                    src="https://femaleventures.nl/wp-content/plugins/ultimate-member/assets/img/default_avatar.jpg"
                    style={imageStyle}
                    className="rounded-circle"
                    alt="selliet"
                  />
                  <h5 className="card-title">Jane Doe</h5>
                  <Link to={"/chat"} className="btn btn-info btn-sm">
                    Message
                  </Link>
                  <br />
                  <br />
                  <Link to={"/add-friend"} className="btn btn-info btn-sm">
                    Add friend
                  </Link>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Friends;
