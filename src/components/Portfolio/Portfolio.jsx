import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { Home } from "../Home/Home";
import ReactSwitch from "react-switch";
import "./Portfolio.css";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguaje, changeMode } from "../../redux/action";
export const ThemeContext = createContext(null);

export const Portfolio = () => {
  const dispatch = useDispatch();
  const { mode, languaje } = useSelector((state) => state);
  const toggleTheme = () => {
    dispatch(changeMode(mode === "light" ? "dark" : "light"));
  };
  const handleLanguaje = () => {
    dispatch(changeLanguaje(languaje === "español" ? "ingles" : "español"));
  };
  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <div className="App_portfoliio" id={mode}>
        <Home />
        <div className="switch">
          <label>{mode === "light" ? "Ligth Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={mode === "dark"} />
        </div>
        <div className="switchLanguaje">
          <label>{languaje === "español" ? "Español" : "Ingles"}</label>
          <ReactSwitch
            onChange={handleLanguaje}
            checked={languaje === "español"}
          />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
