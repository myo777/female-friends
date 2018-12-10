import React, { Component } from "react";
// import './App.css';
import "../assets/css/log-res-body/index.css";
import HeaderMain from "./HeaderMain";
// import HeaderHome from './HeaderHome';
// import HeaderUser from './HeaderUser';
import Footer from "./Footer";
// import Card from './Card';

class Home extends Component {
  render() {
    return (
      <div>
        <HeaderMain />

        <div className="body__content">
          <div className="body__content-text">
            <h2 className="home-title">We empower women in business</h2>
            <p>
              Female Ventures is a non-profit organisation that stimulates and
              supports female leadership and entrepreneurship in corporates,
              SMEs and start-ups. This profits women, companies and society as a
              whole. Join us today!
            </p>

            <h3 className="home-title">Why join?</h3>
            <p>
              Our members get access to exclusive content, inspirational events,
              and an incredible professional network for ambitious women who
              empower one another.
            </p>
            <p>
              Additional perks are a mentor and recruitment program, free
              resources, business templates, and other tools to help accelerate
              your growth.{" "}
            </p>

            <a className="body__content-cta" href="/register">
              Join Female Friends
            </a>
          </div>

          <div className="body__content-image">
            <img
              src="https://images.unsplash.com/photo-1525250265090-2739a154ffc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
              alt="Main page"
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
