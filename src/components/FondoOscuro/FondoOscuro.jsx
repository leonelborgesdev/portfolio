import React from "react";

import "./FondoOscuro.css";

import Typed from "typed.js";

const TypedReactHooksDemo = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        `      <h3>        <span class="word_const">const</span>        <span class="word_Profile"> Profile</span>=        <span class={"word_llave"}>{</span>      </h3>      <h3>        <span class="word_attrib"> Name: </span>        <span class="word_string">"Leonel Borges"</span>        <span class="word_Profile">,</span>      </h3>      <h3>        <span class="word_attrib"> Profesion: </span>        <span class="word_string">"Full Stack Developer"</span>        <span class="word_Profile">,</span></h3><h3><span class="word_llave">}</span></h3>`,
      ],
      typeSpeed: 20,
    };
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
  }, []);

  return (
    <div className="type-wrap">
      <span ref={el} />
    </div>
  );
};
document.getElementById("react-root");

export const FondoOscuro = () => {
  return (
    <div className="container_dark_all">
      <div className="container_body">
        <div className="container_dark">
          <div className="title">
            <TypedReactHooksDemo />
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
