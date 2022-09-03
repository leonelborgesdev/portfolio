import React from "react";

import "./FondoOscuro.css";

export const FondoOscuro = () => {
  const value = {
    id: "1",
    name: "hola",
  };
  return (
    <div className="container_dark_all">
      <div className="container_body">
        <div className="container_dark">
          <div className="title">
            <h3>
              <span className="word_const">const</span>
              <span className="word_Profile"> Profile</span>=
              <span className="word_llave">{"{"}</span>
            </h3>
            {/* <h3>{"const Profile = {"}</h3> */}
            <h3>
              <span className="word_attrib"> Name: </span>
              <span className="word_string">"Leonel Borges"</span>
              <span className="word_Profile">{","}</span>
            </h3>
            <h3>
              <span className="word_attrib"> Profesion: </span>
              <span className="word_string">"Full Stack Developer"</span>
              <span className="word_Profile">{","}</span>
            </h3>
            <h3>
              <span className="word_llave">{"}"}</span>
            </h3>
          </div>
          <div className="bubbles">
            <span style={{ "--i": "11" }}></span>
            <span style={{ "--i": "12" }}></span>
            <span style={{ "--i": "24" }}></span>
            <span style={{ "--i": "10" }}></span>
            <span style={{ "--i": "14" }}></span>
            <span style={{ "--i": "23" }}></span>
            <span style={{ "--i": "18" }}></span>
            <span style={{ "--i": "16" }}></span>
            <span style={{ "--i": "19" }}></span>
            <span style={{ "--i": "20" }}></span>
            <span style={{ "--i": "22" }}></span>
            <span style={{ "--i": "25" }}></span>
            <span style={{ "--i": "18" }}></span>
            <span style={{ "--i": "21" }}></span>
            <span style={{ "--i": "15" }}></span>
            <span style={{ "--i": "13" }}></span>
            <span style={{ "--i": "26" }}></span>
            <span style={{ "--i": "17" }}></span>
            <span style={{ "--i": "13" }}></span>
            <span style={{ "--i": "18" }}></span>
            <span style={{ "--i": "11" }}></span>
            <span style={{ "--i": "12" }}></span>
            <span style={{ "--i": "24" }}></span>
            <span style={{ "--i": "10" }}></span>
            <span style={{ "--i": "14" }}></span>
            <span style={{ "--i": "23" }}></span>
            <span style={{ "--i": "18" }}></span>
            <span style={{ "--i": "16" }}></span>
            <span style={{ "--i": "19" }}></span>
            <span style={{ "--i": "20" }}></span>
            <span style={{ "--i": "22" }}></span>
            <span style={{ "--i": "25" }}></span>
            <span style={{ "--i": "18" }}></span>
            <span style={{ "--i": "21" }}></span>
            <span style={{ "--i": "15" }}></span>
            <span style={{ "--i": "13" }}></span>
            <span style={{ "--i": "26" }}></span>
            <span style={{ "--i": "17" }}></span>
            <span style={{ "--i": "13" }}></span>
            <span style={{ "--i": "18" }}></span>
            <span style={{ "--i": "11" }}></span>
            <span style={{ "--i": "12" }}></span>
            <span style={{ "--i": "24" }}></span>
            <span style={{ "--i": "10" }}></span>
            <span style={{ "--i": "14" }}></span>
            <span style={{ "--i": "23" }}></span>
            <span style={{ "--i": "18" }}></span>
          </div>
        </div>
      </div>
    </div>
  );
};
