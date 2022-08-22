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
import Typewriter from "typewriter-effect";

export const Home = () => {
  const { cards, about_me, language } = useSelector((state) => state);
  return (
    <div id="inicio" className="container_home">
      <FondoOscuro />
      <div id="about" className="sec">
        <h2>{language === "español" ? "Acerca de Mi" : "About Me"}</h2>
        <div className="container_about_me">
          <div className="container_about_me_text">
            {about_me.map((parrafo) => {
              return (
                <div className="text_animation" key={about_me.indexOf(parrafo)}>
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString(parrafo).pauseFor(1000).start();
                    }}
                  />
                  {/* <p key={about_me.indexOf(parrafo)}></p>; */}
                </div>
              );
            })}
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
        <Card card={cards[0]} key={cards[0].title} id={"blue"} />;
        <Card card={cards[1]} key={cards[1].title} id={"yellow"} />;
      </div>
      <div className="container_cards">
        <Card card={cards[2]} key={cards[2].title} id={"grey"} />;
        <Card card={cards[3]} key={cards[3].title} id={"purple"} />;
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
