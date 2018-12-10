import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Card extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  onClick = e => {
    e.preventDefault();
    console.log(e.target.name); // 'logout' or 'profile'
    // const name = e.target.name;
    if (e.target.name === "logout") {
      axios.get(`http://localhost:5001/api/users/logout`).then(res => {
        this.props.history.push("/");
      });
    }

    if (e.target.name === "profile") {
      axios.get(`http://localhost:5001/api/users/profile`).then(res => {
        this.props.history.push("/my-profile");
      });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path d="M12 2c3.032 0 5.5 2.467 5.5 5.5 0 1.458-.483 3.196-3.248 5.59 4.111 1.961 6.602 5.253 7.482 8.909h-19.486c.955-4.188 4.005-7.399 7.519-8.889-1.601-1.287-3.267-3.323-3.267-5.61 0-3.033 2.468-5.5 5.5-5.5zm0-2c-4.142 0-7.5 3.357-7.5 7.5 0 2.012.797 3.834 2.086 5.182-5.03 3.009-6.586 8.501-6.586 11.318h24c0-2.791-1.657-8.28-6.59-11.314 1.292-1.348 2.09-3.172 2.09-5.186 0-4.143-3.358-7.5-7.5-7.5z" />
          </svg>
        </button>

        {this.state.showMenu ? (
          <div
            className="menu"
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            <form onSubmit={this.onSubmit}>
              <button name="profile" type="submit" onClick={this.onClick}>
                {" "}
                My Profile{" "}
              </button>
              <button name="logout" type="submit" onClick={this.onClick}>
                {" "}
                Log out{" "}
              </button>
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}

export default withRouter(Card);
