import React from "react";
import "./PageFooter.css";
import logo_github from "../../assets/logo-github.svg";
import logo_linkedin from "../../assets/logo-linkedin.svg";
import logo_whatsapp from "../../assets/logo-whatsapp.svg";
import logo_facebook from "../../assets/logo-facebook.svg";
import { IonIcon } from "@ionic/react";
import { useSelector } from "react-redux";
import { Portfolio } from "../Portfolio/Portfolio";
import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const PageFooter = () => {
  const { menu_footer, language } = useSelector((state) => state);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = (setSidebarVal, sidebarVar) => {
    setSidebarVal(!sidebarVar);
  };
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
                href="https://wa.me/+59172906483"
                target={"_blank"}
                rel="noreferrer"
              >
                <IonIcon src={logo_whatsapp} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/leonel.borges.311/"
                target={"_blank"}
                rel="noreferrer"
              >
                <IonIcon src={logo_facebook} />
              </a>
            </li>
          </ul>
          <ul
            className="contenedor_toogle"
            onClick={() => {
              showSidebar(setSidebar, sidebar);
            }}
          >
            <li>
              <FaIcons.FaBars />
            </li>
          </ul>
          <div className={sidebar ? "menu active" : "menu"}>
            <div className="opciones_menu">
              <li className="menu_item_close">
                <AiIcons.AiOutlineClose
                  className="button_close"
                  onClick={() => {
                    showSidebar(setSidebar, sidebar);
                  }}
                />
              </li>
              {menu_footer.map((item) => {
                return (
                  <li className="menu_item" key={menu_footer.indexOf(item)}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => {
                        showSidebar(setSidebar, sidebar);
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </div>
            <li className="menu_item_op">
              <Portfolio />
            </li>
          </div>
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
