import React, { Component } from "react";
import "../../../assets/css/profile/index.css";

export default class Form extends Component {
  render() {
    return (
      <div>
        <div id="form-outer">
          <form id="survey-form" method="get" action="#">
            <div className="item">
              <div className="label">
                <label id="name-label" for="first-name">
                  First name{" "}
                </label>
              </div>
              <div className="rightTab">
                <input
                  autofocus
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="input-field"
                  required
                />
              </div>
            </div>
            <div className="item">
              <div className="label">
                <label id="name-label" for="last-name">
                  Last name{" "}
                </label>
              </div>
              <div className="rightTab">
                <input
                  autofocus
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="input-field"
                  required
                />
              </div>
            </div>
            <div className="item">
              <div className="label">
                <label id="email-label" for="email">
                  Your registered email address{" "}
                </label>
              </div>
              <div className="rightTab">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input-field"
                  required
                />
              </div>
            </div>
            <div className="item">
              <div className="label">
                <label id="number-label" for="phone-number">
                  Phone number{" "}
                </label>
              </div>
              <div className="rightTab">
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  className="input-field"
                  required
                />
              </div>
            </div>
            <div className="item">
              <div className="label">
                <label id="number-label" for="date-of-birth">
                  Date of birth{" "}
                </label>
              </div>
              <div className="rightTab">
                <input
                  type="date"
                  name="date-of-birth"
                  id="date-of-birth"
                  className="input-field"
                  required
                />
              </div>
            </div>
            <div className="item">
              <div className="label">
                <label id="number-label" for="city">
                  City{" "}
                </label>
              </div>
              <div className="rightTab">
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="input-field"
                  required
                />
              </div>
            </div>
            <div className="item">
              <div className="label">
                <label id="number-label" for="linkedIn">
                  LinkedIn{" "}
                </label>
              </div>
              <div className="rightTab">
                <input
                  type="text"
                  name="linkedIn"
                  id="linkedIn"
                  className="input-field"
                  required
                />
              </div>
            </div>
            <div className="item">
              <div className="label">
                <label id="education-label" for="biography">
                  Biography{" "}
                </label>
              </div>
              <div className="rightTab">
                <textarea
                  type="text"
                  name="biography"
                  id="biography"
                  className="input-field text-area"
                />
              </div>
            </div>

            <div className="item">
              <div className="label">
                <label id="number-label" for="company-university">
                  Company or University{" "}
                </label>
              </div>
              <div className="rightTab">
                <input
                  type="text"
                  name="company-university"
                  id="company-university"
                  className="input-field"
                  required
                />
              </div>
            </div>

            <div className="item">
              <div className="label">
                <label id="number-label" for="expertise">
                  Expertise{" "}
                </label>
              </div>
              <div className="rightTab">
                <input
                  type="text"
                  name="expertise"
                  id="expertise"
                  className="input-field"
                  required
                />
              </div>
            </div>

            <div className="item">
              <div className="label">
                <label id="number-label" for="experience">
                  Experience{" "}
                </label>
              </div>
              <div className="rightTab">
                <input
                  type="text"
                  name="experience"
                  id="experience"
                  className="input-field"
                  required
                />
              </div>
            </div>
            <div className="item">
              <div className="label">
                <label id="number-label" for="industry">
                  Industry{" "}
                </label>
              </div>
              <div className="rightTab">
                <input
                  type="text"
                  name="industry"
                  id="industry"
                  className="input-field"
                  required
                />
              </div>
            </div>

            <div className="item">
              <div className="label">
                <label id="education-label" for="get-support">
                  What kind of support are you looking for?{" "}
                </label>
              </div>
              <div className="rightTab">
                <textarea
                  type="text"
                  name="get-support"
                  id="get-support"
                  className="input-field text-area"
                />
              </div>
            </div>

            <div className="item">
              <div className="label">
                <label id="education-label" for="give-support">
                  What kind of support can you give?{" "}
                </label>
              </div>
              <div className="rightTab">
                <textarea
                  type="text"
                  name="give-support"
                  id="give-support"
                  className="input-field text-area"
                />
              </div>
            </div>

            <div class="item">
              <div class="label">
                <label for="roles">Role</label>
              </div>
              <div class="rightTab">
                <ul id="roles" style={{ listStyle: "none" }}>
                  <li>
                    <label>
                      <input type="radio" value="mentor" name="role" />
                      Mentor
                    </label>
                  </li>
                  <li>
                    <label>
                      <input type="radio" value="mentee" name="role" />
                      Mentee
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            <div class="item">
              <div class="label">
                <label for="recruitment">Recruitment</label>
              </div>
              <div class="rightTab">
                <ul id="roles" style={{ listStyle: "none" }}>
                  <li>
                    <label>
                      <input
                        type="radio"
                        value="interested"
                        name="recruitment"
                      />
                      interested
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        type="radio"
                        value="not-interested"
                        name="recruitment"
                      />
                      Not interested
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="form_submit-buttons">
              <button className="submit-button" type="submit">
                Update Profile
              </button>
              <button className="submit-button" type="submit">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
