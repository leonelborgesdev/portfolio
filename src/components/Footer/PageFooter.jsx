import React from "react";
import "./PageFooter.css";
// import logo_instagram from "../../assets/logo-instagram.svg";
// import logo_twitter from "../../assets/logo-twitter.svg";
import logo_github from "../../assets/logo-github.svg";
import logo_linkedin from "../../assets/logo-linkedin.svg";
import logo_gmail from "../../assets/mail-unread-outline.svg";
import { IonIcon } from "@ionic/react";
import { useSelector } from "react-redux";

export const PageFooter = () => {
  const { menu_footer, language } = useSelector((state) => state);
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
              <a
                href="https://www.linkedin.com/in/leonelborgesdev"
                target={"_blank"}
                rel="noreferrer"
              >
                <IonIcon src={logo_linkedin} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/leonelborgesdev"
                target={"_blank"}
                rel="noreferrer"
              >
                <IonIcon src={logo_github} />
              </a>
            </li>
            <li>
              <a
                href="mailto:leonelbor06@gmail.com"
                target={"_blank"}
                rel="noreferrer"
              >
                <IonIcon src={logo_gmail} />
              </a>
            </li>
            {/* <li>
              <a href="#">
                <IonIcon src={logo_instagram} />
              </a>
            </li>
            <li>
              <a href="#">
                <IonIcon src={logo_twitter} />
              </a>
            </li> */}
          </ul>
          <ul className="menu">
            {menu_footer.map((item) => {
              return (
                <li key={menu_footer.indexOf(item)}>
                  <a href={`#${item.id}`}>{item.name}</a>
                </li>
              );
            })}
          </ul>
          <div className="footer_año">
            <p>
              {language === "español"
                ? "©2022 Borges | Todos los Derechos Reservados"
                : "©2022 Borges | All Rights Reserved"}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
