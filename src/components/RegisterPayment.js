
import React, { Component } from "react";
import HeaderMain from "./HeaderMain";
import Footer from "./Footer";
import "../assets/css/log-res-body/index.css";
//import axios from "axios";

class Register extends Component {
  register = e => {
    e.preventDefault();
    this.props.history.push("/login");
  };

  render() {
    return (
      <div>
        <HeaderMain />

        <div className="form-introduction">
          <h2 className="payment-title">
            You're only one step away from joining Female Friends
          </h2>
          <p>
            A small membership fee will enable us to expand our activities to
            support female professionals in business. It will allow us to host
            more inspirational events and provide you with more resources that
            will boost your growth.
          </p>
          <p>
            Our payment facilities are easy, secure, and fast. A donation of
            only €25 will give you a full year of membership and access to
            exclusive content and a professional network.{" "}
          </p>
          <p>Thank you!</p>
        </div>
        {/* <div className="form-billing">
                <h2 className="billing-details">Billing details</h2>    
                <form>
                    <label for="firstname">First name</label>
                    <input type="text" name="firstName" ></input>
                    <br />
                    <label for="lastName">Last name</label>
                    <input type="text" name="lastName"></input>
                    <br />
                    <label for="companyName">Company name</label>
                    <input type="text" name="companyName"></input>
                    <br />
                    <label for="country">Country</label>
                    <input type="text" name="country"></input>
                    <br />
                    <label for="streetAddress">Street address</label>
                    <input type="text" name="streetAddress"></input>
                    <br />
                    <label for="postcodeZip">Postcode/ZIP</label>
                    <input type="text" name="postcodeZip"></input>
                    <br />
                    <label for="city">City</label>
                    <input type="text" name="city"></input>
                    <br />
                    <label for="phone">Phone</label>
                    <input type="text" name="phone"></input>
                    <br />
                    <input type="radio" name="termsconditions" required></input> 
                    <label for="termsconditions" name="termsconditions">By checking this box, I accept the terms and conditions</label>
                    <p>INSERT PAYMENT SYSTEM HERE</p>
                    <button type="submit">Place order</button> 
                </form>
            </div>
        </div> */}
        <div id="form-outer">
          <form onSubmit={this.register}>
            <div className="item">
              <div className="billing-label">
                <label id="name-label" for="name">
                  * First Name:{" "}
                </label>
              </div>
              <div className="rightTab">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="billing-input-field"
                  required
                />
              </div>
            </div>
            <div className="item">
              <div className="billing-label">
                <label id="name-label" for="name">
                  * Last Name:{" "}
                </label>
              </div>
              <div className="rightTab">
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="billing-input-field"
                  required
                />
              </div>
            </div>
            <div className="item">
              <div className="billing-label">
                <label id="email-label" for="email">
                  * Email:{" "}
                </label>
              </div>
              <div className="rightTab">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="billing-input-field"
                  required
                />
              </div>
            </div>
            <div className="item">
              <div className="billing-label">
                <label id="company-label" for="company">
                  Company:{" "}
                </label>
              </div>
              <div className="rightTab">
                <input
                  type="text"
                  name="companyName"
                  id="company"
                  className="billing-input-field"
                />
              </div>
            </div>
            <div className="item">
              <div className="billing-label">
                <label id="country-label" for="country">
                  Country:{" "}
                </label>
              </div>
              <div className="rightTab">
                <input
                  type="text"
                  name="country"
                  id="country"
                  className="billing-input-field"
                />
              </div>
            </div>
            <div className="item">
              <div className="billing-label">
                <label id="address-label" for="education">
                  Street Address:
                </label>
              </div>
              <div className="rightTab">
                <input
                  type="text"
                  name="streetAddress"
                  id="streetAddress"
                  className="billing-input-field"
                />
              </div>
            </div>
            <div className="item">
              <div className="billing-label">
                <label id="postcode-label" for="postcode">
                  Postcode/ZIP:
                </label>
              </div>
              <div className="rightTab">
                <input
                  type="text"
                  name="postcodeZip"
                  id="postcodeZip"
                  className="billing-input-field"
                />
              </div>
            </div>
            <div className="item">
              <div className="billing-label">
                <label id="city-label" for="city">
                  City:
                </label>
              </div>
              <div className="rightTab">
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="billing-input-field"
                />
              </div>
            </div>
            <div className="item">
              <div className="billing-label">
                <label id="phone-label" for="phone">
                  Phone:
                </label>
              </div>
              <div className="rightTab">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="billing-input-field"
                />
              </div>
            </div>
            <div className="item">
              <div className="billing-label">
                <label id="iban-label" for="iban">
                  * IBAN:
                </label>
              </div>
              <div className="rightTab">
                <input
                  type="text"
                  name="iban"
                  id="iban"
                  className="billing-input-field"
                  required
                />
              </div>
            </div>
            <div class="item">
              <div class="billing-label">
                <label id="bank-label" for="bank">
                  * Bank:{" "}
                </label>
              </div>
              <div class="rightTab">
                <select name="bank" class="select-buttons" id="dropdown">
                  <option disabled value>
                    Select your bank
                  </option>
                  <option value="rabobank">Rabobank</option>
                  <option value="abn-amro">ABN Amro</option>
                  <option value="asn-bank">ASN Bank</option>
                  <option value="bunq">Bunq</option>
                  <option value="abn-amro">ABN Amro</option>
                  <option value="bunq">Bunq</option>
                  <option value="handelsbanken">Handelsbanken</option>
                  <option value="ing">ING</option>
                  <option value="knab">Knab</option>
                  <option value="moneyou">Moneyou</option>
                  <option value="regiobank">Regiobank</option>
                  <option value="sns">SNS</option>
                  <option value="triodos-bank">Triodos Bank</option>
                  <option value="van-lanshot">Van Lanschot</option>
                </select>
              </div>
            </div>
            <br />
            <div className="item">
              <input type="radio" name="termsconditions" required />
              <label for="termsconditions" name="termsconditions">
                &nbsp; By checking this box, I accept the terms and conditions
                of Female Friends
              </label>
            </div>
            <br />
            <button id="submit" type="submit">
              Register
            </button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Register;