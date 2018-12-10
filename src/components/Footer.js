import React, { Component } from "react";
// import './App.css';
import "../assets/css/footer/index.css";
import { InlineShareButtons } from "sharethis-reactjs";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div class="contact">
            <p class="footer__heading">Contact</p>
            <a href="mailto:team@femaleventures.nl">team@femaleventures.nl</a>
          </div>
          <div class="follow-us">
            <p class="footer__heading">Follow us</p>
            <div class="follow-us-linkedin">
              <svg
                class="svg-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <a
                href="https://www.linkedin.com/organization/14974484/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link us on LinkedIn
              </a>
            </div>
            <div class="follow-us-facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
              <a
                href="https://www.facebook.com/femaleventures/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Like us on Facebook
              </a>
            </div>
            <div class="follow-us-twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" />
              </svg>
              <a
                href="https://twitter.com/FemVentures"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow us on Twitter
              </a>
            </div>
          </div>
          <div class="subscribe">
            <p class="footer__heading">Subscribe to our newsletter</p>
            Email:*
            <form>
              <input type="text" />
              <button class="subscribe-button">Subscribe!</button>
            </form>
          </div>
          <div class="information">
            <p class="footer__heading">Information</p>
            <a href="https://femaleventures.nl/terms-and-conditions/">
              Terms and Conditions
            </a>
            <a href="https://femaleventures.nl/privacy-main/">Privacy</a>
            <a href="https://femaleventures.nl/logout/">Logout</a>
          </div>
        </footer>

        {/* SOCIAL */}

        <InlineShareButtons
          config={{
            alignment: "center", // alignment of buttons (left, center, right)
            enabled: true, // show/hide buttons (true, false)
            font_size: 16, // font size for the buttons
            labels: "null", // button labels (cta, counts, null)
            language: "en", // which language to use (see LANGUAGES)
            networks: [
              // which networks to include (see SHARING NETWORKS)
              "whatsapp",
              "linkedin",
              "messenger",
              "facebook",
              "twitter"
            ],
            padding: 12, // padding within buttons (INTEGER)
            radius: 4, // the corner radius on each button (INTEGER)
            // show_total: true,
            size: 40, // the size of each button (INTEGER)

            // OPTIONAL PARAMETERS
            // url: 'https://www.sharethis.com', // (defaults to current url)
            url: "https://femaleventures.nl", // (defaults to current url)
            // image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
            description: "custom text", // (defaults to og:description or twitter:description)
            title: "Empowering Women, Check Our Website", // (defaults to og:title or twitter:title)
            // message: 'custom email text',     // (only for email sharing)
            // subject: 'custom email subject',  // (only for email sharing)
            username: "FemVentures" // (only for twitter sharing)
          }}
        />

        <br />
      </div>
    );
  }
}

export default Footer;
