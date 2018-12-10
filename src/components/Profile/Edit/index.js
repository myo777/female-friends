import React, { Component } from "react";
import HeaderUser from "../../../components/HeaderUser";
import Footer from "../../../components/Footer";
import Form from "./Form";
import "../../../assets/css/profile/index.css";

export default class index extends Component {
  render() {
    return (
      <div>
        <HeaderUser />
        <Form />
        <Footer />
      </div>
    );
  }
}
