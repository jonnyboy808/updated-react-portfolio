import React from "react";
import Octocat from "../assets/images/octocat-icon.svg";
import LinkedIn from "../assets/images/linkedin.png";
import Medium from "../assets/images/medium.png";

// FOOTER COMPONENT
function Footer() {
  return (
    <footer>
      <div>
        <ul>
          <li id="octo">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Octocat}
                alt={"Clickable GitHub icon that opens my GitHub profile."}
                width="62px"
              />
            </a>
          </li>
          <li id="linked">
            <a
              href="https://www.linkedin.com/in/jonny/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={LinkedIn}
                alt={"Clickable LinkedIn icon that opens my LinkedIn profile."}
                width="90px"
              />
            </a>
          </li>
          <li id="stack">
            <a
              href="https://medium.com"
              target="_blank"
              rel="noreferrer">
              <img
                src={Medium}
                alt={"Clickable Stack Medium icon that directs to profile."}
                width="52px"
              
              />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p>&copy; Copyright 2023 by Jonathan Borroel</p>
      </div>
    </footer>
  );
}

export default Footer;
