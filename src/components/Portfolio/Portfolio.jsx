import React from "react";
import { createContext } from "react";
import { Home } from "../Home/Home";
import ReactSwitch from "react-switch";
import "./Portfolio.css";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguaje, changeMode } from "../../redux/action";
import arrow_down_outline from "../../assets/arrow-down-outline.svg";
import { IonIcon } from "@ionic/react";

export const ThemeContext = createContext(null);

export const Portfolio = () => {
  const dispatch = useDispatch();
  const { mode, language, cards } = useSelector((state) => state);
  const toggleTheme = () => {
    dispatch(changeMode(mode === "light" ? "dark" : "light"));
  };
  const handleLanguage = () => {
    dispatch(
      changeLanguaje(language === "español" ? "ingles" : "español", cards)
    );
    // setTimeout(() => {
    //   window.location.reload();
    // }, 500);
  };
  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <div className="App_portfoliio" id={mode}>
        <Home />
        <ul className="switch_bajar">
          <li>
            <a href="#menu">
              <IonIcon src={arrow_down_outline} />
            </a>
          </li>
        </ul>
        <div className="switch">
          <label>{mode === "light" ? "Ligth Mode" : "Dark Mode"}</label>
          <ReactSwitch
            onColor="#22d4d4"
            onChange={toggleTheme}
            checked={mode === "dark"}
          />
        </div>
        <div className="switchLanguaje">
          <label>{language === "español" ? "Español" : "Ingles"}</label>
          <ReactSwitch
            onColor="#22d4d4"
            onChange={handleLanguage}
            checked={language === "español"}
          />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
