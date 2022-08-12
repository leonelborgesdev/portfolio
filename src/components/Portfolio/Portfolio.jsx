import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { Home } from "../Home/Home";
import ReactSwitch from "react-switch";
import "./Portfolio.css";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../redux/action";
export const ThemeContext = createContext(null);

export const Portfolio = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state);
  const toggleTheme = () => {
    dispatch(changeMode(mode === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <div className="App_portfoliio" id={mode}>
        <Home />
        <div className="switch">
          <label>{mode === "light" ? "Ligth Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={mode === "dark"} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
