import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import React, { useEffect } from "react";
import bg from "../../assets/bg.jpg";
import clouds_1 from "../../assets/clouds_1.png";
import clouds_2 from "../../assets/clouds_2.png";
import man from "../../assets/man.png";
import mountain_left from "../../assets/mountain_left.png";
import mountain_rigth from "../../assets/mountain_right.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.css";
import { Card } from "../Card/Card";

export const Home = () => {
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
      <section>
        <img src={bg} id="bg" />
        <h2 id="text">Mountains</h2>
        <img src={man} id="man" />
        <img src={clouds_1} id="clouds_1" />
        <img src={clouds_2} id="clouds_2" />
        <img src={mountain_left} id="mountain_left" />
        <img src={mountain_rigth} id="mountain_rigth" />
      </section>
      <div className="sec">
        <h2> ScrollTrigger is Awesome</h2>
        <p>
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en
          demostraciones de tipografías o de borradores de diseño para probar el
          diseño visual antes de insertar el texto final. Aunque no posee
          actualmente fuentes para justificar sus hipótesis, el profesor de
          filología clásica Richard McClintock asegura que su uso se remonta a
          los impresores de comienzos del siglo xvi.1​ Su uso en algunos
          editores de texto muy conocidos en la actualidad ha dado al texto
          lorem ipsum nueva popularidad. El texto en sí no tiene sentido, aunque
          no es aleatorio, sino que deriva de un texto de Cicerón en lengua
          latina, a cuyas palabras se les han eliminado sílabas o letras. El
          significado del mismo no tiene importancia, ya que solo es una
          demostración o prueba. El texto procede de la obra De finibus bonorum
          et malorum (Sobre los límites del bien y del mal) que comienza con:
        </p>
      </div>
      <Card />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/scrollTrigger.min.js"></script>
    </div>
  );
};
