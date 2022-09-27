import React from "react";
import { useSelector } from "react-redux";
import "./Home.css";
import { Card } from "../Card/Card";
import { Skils } from "../Skils/Skils";
import { PageFooter } from "../Footer/PageFooter";
import Foto from "../../assets/Foto.jpg";
import ButonPdf from "../ButonPdf/ButonPdf";
import { SoftSkills } from "../SoftSkills/SoftSkills";
import { Contacto } from "../Contacto/Contacto";
import { Mapa } from "../Mapa/Mapa";
import { DarkMode } from "../DarkMode/DarkMode";

export const Home = () => {
  const { cards, language, mode } = useSelector((state) => state);
  return (
    <div id="inicio" className="container_home">
      <DarkMode />
      <div id="about" className="sec">
        <div id="contact" className="separadores">
          <h1>{language === "español" ? "Acerca de Mi" : "About Me"}</h1>
        </div>
        <div className="container_about_me">
          <div className="container_about_me_text">
            {language === "español" ? (
              <div className="text_animation">
                <p>{"Hola !!!😃"}</p>
                <p>
                  {
                    "Me llamo Leonel Borges, soy desarrollador web, vivo en la ciudad de Bermejo, de Tarija Bolivia, mis hobbies son el voley, la natacion y los deportes. Soy Graduado Full Stack Developer, con aptitudes en Backend y Frontend. Me gusta programar, me gusta aprender, y dia a dia mejorar mis habilidades estudiando, practicando y participando en proyectos de tecnologia."
                  }
                </p>
                <p>
                  {
                    "Fortalezas: El trabajo en equipo se me da muy bien, me adapto facilmente a los cambios, soy participativo, consulto y también doy asesoría a mis compañeros de equipo, si hay algo que no se, lo investigo y me esfuerzo mucho por encontrar la respuesta."
                  }
                </p>
                <p>
                  {
                    "Experiencia: Por ahora mi experiencia es netamente academica, participando en proyectos individuales y grupales, como ser los proyectos en bootcamp en henry y otros, tambien he sido ayudante de catedra en la UAJMS, ayudando a los chicos con sus practicos, tareas y preparandolos para sus examenes de programacion en Java."
                  }
                </p>
              </div>
            ) : (
              <div className="text_animation">
                <p>{"Hi !!!😃"}</p>
                <p>
                  {
                    "My name is Leonel Borges, I am a web developer, I live in the city of Bermejo, Tarija Bolivia, my hobbies are volleyball, swimming and sports. I am a Henry Full Stack Developer Graduate, with skills in Backend and Frontend. I like programming, I like to learn more every day and I try to improve my skills by studying, practicing and participating in technology projects."
                  }
                </p>
                <p>
                  {
                    "Strengths: I am persevering, if there is something I don't know, I do everything possible to find the solution, I investigate the subject, I consult with my teammates, I accept advice, opinions and criticism with the idea of improving and finding the best possible solution. I work as a team, I help my colleagues if they need it so that the whole team can meet its objectives."
                  }
                </p>
                <p>
                  {
                    "Experience: For now my experience is purely academic, participating in individual and group projects such as the projects in Henry and others, I have also been a teaching assistant at the UAJMS, helping the boys with their practices, homework and preparing them for their exams. Java programming."
                  }
                </p>
              </div>
            )}
          </div>
          <div className="container_image">
            <img src={Foto} alt="jpg" />
          </div>
        </div>
      </div>
      <div id="proyectos" className="separadores">
        <h1>{language === "español" ? "Proyectos" : "Projects"}</h1>
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
        <h1>
          {language === "español" ? "Habilidades Tecnicas" : "Technical Skills"}
        </h1>
      </div>
      <div className="container_all_skills">
        <Skils />
      </div>
      <div id="habilidadesBlandas" className="separadores">
        <h1>{language === "español" ? "Habilidades Blandas" : "SoftSkills"}</h1>
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
            <h1>{language === "español" ? "Contactame" : "Contact me"}</h1>
          </div>
          <div className="container_hi_send">
            <h4>
              😃¡{language === "español" ? "Charlemos" : "texto en ingles"}!
            </h4>
            <h5>
              👋🏻{language === "español" ? "Hola de Nuevo" : "texto en ingles"}
            </h5>
            <h5>
              {language === "español"
                ? "Enviame un correo en el siguiente formulario y con gusto lo leere"
                : "texto en ingles"}
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
