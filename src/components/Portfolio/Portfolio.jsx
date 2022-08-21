import React from "react";
import { createContext } from "react";
import { Home } from "../Home/Home";
import ReactSwitch from "react-switch";
import "./Portfolio.css";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguaje, changeMode } from "../../redux/action";
export const ThemeContext = createContext(null);

export const Portfolio = () => {
  const dispatch = useDispatch();
  const { mode, languaje, cards } = useSelector((state) => state);
  const toggleTheme = () => {
    dispatch(changeMode(mode === "light" ? "dark" : "light"));
  };
  const handleLanguaje = () => {
    dispatch(
      changeLanguaje(languaje === "español" ? "ingles" : "español", cards)
    );
  };
  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <div className="App_portfoliio" id={mode}>
        <Home />
        <div className="switch">
          <label>{mode === "light" ? "Ligth Mode" : "Dark Mode"}</label>
          <ReactSwitch
            onColor="#22d4d4"
            onChange={toggleTheme}
            checked={mode === "dark"}
          />
        </div>
        <div className="switchLanguaje">
          <label>{languaje === "español" ? "Español" : "Ingles"}</label>
          <ReactSwitch
            onColor="#22d4d4"
            onChange={handleLanguaje}
            checked={languaje === "español"}
          />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
