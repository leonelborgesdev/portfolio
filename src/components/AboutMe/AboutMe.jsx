import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./AboutMe.css";

export const AboutMe = () => {
  const { about_me, about_me2, language } = useSelector((state) => state);
  let [acercaDeMi] = useState(language === "ingles" ? about_me2 : about_me);
  let element = "";
  for (let i = 0; i < acercaDeMi.length; i++) {
    element = element + " " + acercaDeMi[i] + "<br>";
  }
  console.log("element", element);
  return (
    <div className="container_animation_about_me">
      <h2 data-text={`${element}`}>{element}</h2>
    </div>
  );
};
