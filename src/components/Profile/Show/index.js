import React, { Component } from "react";
import Info from "./Info";
import HeaderUser from "../../../components/HeaderUser";
//import Header from "../../../components/profile/Header";
import Header from "../Header";

import Footer from "../../../components/Footer";

export default class index extends Component {
  render() {
    return (
      <div>
        <HeaderUser />
        <Header />
        <Info />
        <Footer />
      </div>
    );
  }
}
