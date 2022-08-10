import React from "react";
import "./PageFooter.css";
import logo_instagram from "../../assets/logo-instagram.svg";
import logo_github from "../../assets/logo-github.svg";
import logo_linkedin from "../../assets/logo-linkedin.svg";
import logo_twitter from "../../assets/logo-twitter.svg";

export const PageFooter = () => {
  return (
    <div className="container_all_footer">
      <div className="body_footer">
        <footer>
          <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
          </div>
          <ul className="social_icon">
            <li>
              <a href="https://www.linkedin.com/in/leonelborgesdev">
                <img src={logo_linkedin} width={"30px"} height={"30px"} />
              </a>
            </li>
            <li>
              <a href="https://github.com/leonelborgesdev">
                <img src={logo_github} width={"30px"} height={"30px"} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={logo_instagram} width={"30px"} height={"30px"} />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={logo_twitter} width={"30px"} height={"30px"} />
              </a>
            </li>
          </ul>
          <ul className="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <p>©2022 Borges | All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
};
