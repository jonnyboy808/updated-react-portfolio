import React from "react";
import Github from "../assets/images/github.svg";
import LinkedIn from "../assets/images/linkedin.png";
import Medium from "../assets/images/medium.png";

// renders the icons of the footer with links to open new tabs
function Footer() {
  return (
    <footer>
      <div>
        <ul>
          <li id="github">
            <a href="https://github.com/jonnyboy808" target="_blank" rel="noreferrer">
              <img src={Github} alt={"GitHub icon that directs to profile."}
                width="62px"/>
            </a>
          </li>
          <li id="linked">
            <a
              href="https://www.linkedin.com/in/jonathan-b-/" target="_blank" rel="noreferrer">
              <img src={LinkedIn} alt={"LinkedIn icon that directs to profile."}
                width="90px"/>
            </a>
          </li>
          <li id="medium">
            <a href="https://medium.com/@jonny-b" target="_blank" rel="noreferrer">
              <img src={Medium} alt={"Medium icon that directs to profile."}
                width="52px"
              />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p>&copy; Copyright 2023 Borroel</p>
      </div>
    </footer>
  );
}

export default Footer;
