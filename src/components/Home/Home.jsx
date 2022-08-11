import React, { useEffect } from "react";
import bg from "../../assets/bg.jpg";
import clouds_1 from "../../assets/clouds_1.png";
import clouds_2 from "../../assets/clouds_2.png";
import { useSelector } from "react-redux";
import man from "../../assets/man.png";
import mountain_left from "../../assets/mountain_left.png";
import mountain_rigth from "../../assets/mountain_right.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.css";
import { Card } from "../Card/Card";
import { Skils } from "../Skils/Skils";
import { PageFooter } from "../Footer/PageFooter";
import Foto from "../../assets/Foto.jpg";

export const Home = () => {
  const { cards } = useSelector((state) => state);
  gsap.registerPlugin(ScrollTrigger);
  React.useEffect(() => {
    gsap.to("#bg", {
      scrollTrigger: {
        scrub: 1,
      },
      scale: 1.5,
    });
    gsap.to("#man", {
      scrollTrigger: {
        scrub: 1,
      },
      scale: 0.5,
    });
    gsap.to("#clouds_1", {
      scrollTrigger: {
        scrub: 1,
      },
      x: 200,
    });
    gsap.to("#clouds_2", {
      scrollTrigger: {
        scrub: 1,
      },
      x: -200,
    });
    gsap.to("#mountain_left", {
      scrollTrigger: {
        scrub: 1,
      },
      x: -500,
    });
    gsap.to("#mountain_rigth", {
      scrollTrigger: {
        scrub: 1,
      },
      x: 500,
    });
    gsap.to("#text", {
      scrollTrigger: {
        scrub: 1,
      },
      x: 500,
    });
  });
  return (
    <div className="container_home">
      <section className="container_section">
        <img src={bg} id="bg" />
        <h2 id="text">Mountains</h2>
        <img src={man} id="man" />
        <img src={clouds_1} id="clouds_1" />
        <img src={clouds_2} id="clouds_2" />
        <img src={mountain_left} id="mountain_left" />
        <img src={mountain_rigth} id="mountain_rigth" />
      </section>
      <div className="sec">
        <h2>PORTFOLIO</h2>
        <div className="container_about_me">
          <div className="container_about_me_text">
            <p>👋🏻Hola😃</p>
            <p>
              Mi nombre es Leonel Borges, soy de la desarrollador web de
              Bolivia, mis hobies son el voley, la natacion y los deportes. Soy
              Graduado Full Stack developer, con aptitudes en Backend y
              Frontend. Me gusta programar, me gusta aprender mas dia a dia y
              trato de mejorar mis habilidades estudiando, practicando y
              participando en proyectos de tecnilogia.
            </p>
            <p>
              🔥Fortalezas: El trabajo en equipo se me da muy bien, me adapto
              facilmente a los cambios, soy participativo, consulto y también
              doy asesoría a mis compañeros de equipo, si hay algo que no se, lo
              investigo y me esfuerzo mucho por encontrar la respuesta.
            </p>
            <p>
              🧑‍💻💼Experiencia: Por ahora mi experiencia es netamente academica,
              participando en proyectos individuales y grupales como ser los
              proyectos en henry y otros, tambien he sido ayudante de catedra en
              la UAJMS, ayudando a los chicos con sus practicos, tareas y
              preparandolos para sus examenes de programacion en Java
            </p>
          </div>
          <img src={Foto} alt="image.jpg" />
        </div>
      </div>
      <div className="separadores">
        <h2> Proyects</h2>
      </div>
      <div className="container_cards">
        <Card card={cards[0]} key={cards[0].title} id={"blue"} />;
        <Card card={cards[1]} key={cards[1].title} id={"yellow"} />;
      </div>
      <div className="container_cards">
        <Card card={cards[2]} key={cards[2].title} id={"grey"} />;
        <Card card={cards[3]} key={cards[3].title} id={"purple"} />;
      </div>
      <div className="separadores">
        <h2> Skills</h2>
      </div>
      <div className="container_all_skills">
        <Skils />
      </div>
      <div className="container_footer">
        <PageFooter />
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/scrollTrigger.min.js"></script>
    </div>
  );
};
