import React from "react";
import { useSelector } from "react-redux";
import "./Home.css";
import { Card } from "../Card/Card";
import { Skils } from "../Skils/Skils";
import { PageFooter } from "../Footer/PageFooter";
import Foto from "../../assets/Foto.jpg";
import { FondoOscuro } from "../FondoOscuro/FondoOscuro";
import ButonPdf from "../ButonPdf/ButonPdf";
import { SoftSkills } from "../SoftSkills/SoftSkills";
// import Typewriter from "typewriter-effect";
import { Contacto } from "../Contacto/Contacto";
import { Mapa } from "../Mapa/Mapa";
import { useState } from "react";

import Typed from "typed.js";

const TypedReactHooksDemo = () => {
  const { about_me2, acerca_de_mi, language } = useSelector((state) => state);
  let [acercaDeMi] = useState(language === "ingles" ? about_me2 : acerca_de_mi);
  let element = "";
  for (let i = 0; i < acercaDeMi.length; i++) {
    if (i !== acercaDeMi.length - 1) {
      element = element + " " + acercaDeMi[i] + "<br><br>";
    } else {
      element = element + " " + acercaDeMi[i];
    }
  }
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [element],
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

export const Home = () => {
  const { cards, about_me2, acerca_de_mi, language, mode } = useSelector(
    (state) => state
  );
  let [acercaDeMi] = useState(language === "ingles" ? about_me2 : acerca_de_mi);
  let element = "";
  for (let i = 0; i < acercaDeMi.length; i++) {
    if (i !== acercaDeMi.length - 1) {
      element = element + " " + acercaDeMi[i] + "<br>";
    } else {
      element = element + " " + acercaDeMi[i];
    }
  }
  return (
    <div id="inicio" className="container_home">
      <FondoOscuro />
      <div id="about" className="sec">
        <div id="contact" className="separadores">
          <h1>{language === "español" ? "Acerca de Mi" : "About Me"}</h1>
        </div>
        <div className="container_about_me">
          <div className="container_about_me_text">
            <div className="text_animation">
              <TypedReactHooksDemo />
            </div>
            {/* {acercaDeMi.map((parrafo, index) => {
              return (
                <div className="text_animation" key={index}>
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString(parrafo).pauseFor(9000).start();
                    }}
                  />
                </div>
              );
            })} */}
          </div>
          <div className="container_image">
            <img src={Foto} alt="jpg" />
          </div>
        </div>
      </div>
      <div id="proyectos" className="separadores">
        <h2>{language === "español" ? "Proyectos" : "Projects"}</h2>
      </div>
      <div className="container_cards">
        <Card card={cards[0]} key={cards[0].title} id={"blue"} />
        <Card card={cards[1]} key={cards[1].title} id={"yellow"} />
      </div>
      <div className="container_cards">
        <Card card={cards[2]} key={cards[2].title} id={"grey"} />
        <Card card={cards[3]} key={cards[3].title} id={"purple"} />
      </div>
      <div id="habilidadesTecnicas" className="separadores">
        <h2>
          {language === "español" ? "Habilidades Tecnicas" : "Technical Skills"}
        </h2>
      </div>
      <div className="container_all_skills">
        <Skils />
      </div>
      <div id="habilidadesBlandas" className="separadores">
        <h2>{language === "español" ? "Habilidades Blandas" : "SoftSkills"}</h2>
      </div>
      <div className="container_all_skills">
        <SoftSkills />
      </div>
      <div id="contactame" className="container_correo_mapa">
        <div className="container_map">
          <Mapa />
        </div>
        <div className="container_correo" id={mode}>
          <div id="contact" className="separadores">
            <h2>{language === "español" ? "Contactame" : "Contact me"}</h2>
          </div>
          <div className="container_hi_send">
            <h4>😃¡Charlemos!</h4>
            <h5>👋🏻Hola de Nuevo</h5>
            <h5>
              Enviame un correo en el siguiente formulario y con gusto lo leere
              🙂
            </h5>
          </div>
          <Contacto />
        </div>
      </div>
      <div className="container_curriculum">
        <ButonPdf />
      </div>
      <div id="menu" className="container_footer">
        <PageFooter />
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/scrollTrigger.min.js"></script>
    </div>
  );
};
