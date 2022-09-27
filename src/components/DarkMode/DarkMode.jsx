import React from "react";
import "./DarkMode.css";
import Typed from "typed.js";

const TypedReactHooksDemo = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        `<h3><span class="word_const">const</span><span class="word_Profile"> Profile</span>=<span class="word_llave">{</span></h3><h3><span class="word_attrib"> Name: </span><span class="word_string">"Leonel Borges"</span><span class="word_Profile">,</span></h3><h3><span class="word_attrib"> Profesion: </span><span class="word_string">"Full Stack Developer"</span><span class="word_Profile">,</span></h3><h3><span class="word_llave">}</span></h3>`,
      ],
      typeSpeed: 30,
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

export const DarkMode = () => {
  return (
    <div className="containerBodyDarkMode">
      <section>
        <div className="layer layer1"></div>
        <div className="layer layer2"></div>
        <div className="layer layer3"></div>
        <div className="layer layer4"></div>
        <div className="layer layer5"></div>
        <div className="layer layer6"></div>
        <div className="layer layer7"></div>
        <div className="layer layer8"></div>
        <div className="layer layer9"></div>
        <div className="Title_Portfolio">
          <TypedReactHooksDemo />
        </div>
      </section>
    </div>
  );
};
