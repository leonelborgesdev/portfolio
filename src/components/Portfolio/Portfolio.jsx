import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { Home } from "../Home/Home";
import ReactSwitch from "react-switch";
import "./Portfolio.css";
export const ThemeContext = createContext(null);

export const Portfolio = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App_portfoliio" id={theme}>
        <Home />
        <div className="switch">
          <label>{theme === "light" ? "Ligth Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
