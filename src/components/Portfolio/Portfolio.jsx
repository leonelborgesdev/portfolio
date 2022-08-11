import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { Home } from "../Home/Home";
export const ThemeContext = createContext(null);

export const Portfolio = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App_portfoliio" id={theme}>
        <Home />
      </div>
    </ThemeContext.Provider>
  );
};
