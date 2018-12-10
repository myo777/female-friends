import React, { Component } from 'react';
// import './App.css';
import "../assets/css/header/index.css";


class HeaderHome extends Component {
  render() {
    return (
      <div>
        <header>
          <img src="https://femaleventures.nl/wp-content/uploads/2018/06/Logo_White-e1530265633749.png" alt="Female Ventures Logo" />
          <div class="user-button-group">
            <a class="user-button" href="/">Home</a>
          </div>
        </header>

      </div>
    );
  }
}

export default HeaderHome;
