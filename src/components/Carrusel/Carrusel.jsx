import React from "react";
import {
  CarouselComponent,
  CarouselItemsDirective,
  CarouselItemDirective,
} from "@syncfusion/ej2-react-navigations";
import BarberApp_2 from "../../assets/BarberApp/BarberApp_2.png";
import BarberApp_3 from "../../assets/BarberApp/BarberApp_3.png";
import BarberApp_4 from "../../assets/BarberApp/BarberApp_4.png";
import BarberApp_5 from "../../assets/BarberApp/BarberApp_5.png";
import BarberApp_6 from "../../assets/BarberApp/BarberApp_6.png";
import "./Carrusel.css";

export const Carrusel = () => {
  const slide1Template = () => (
    <figure className="img-container">
      <img
        src={BarberApp_2}
        alt="png"
        style={{ height: "100%", width: "100%" }}
      />
      <figcaption className="img-caption">
        Golden Gate Bridge, Sanfrancisco
      </figcaption>
    </figure>
  );
  const slide2Template = () => (
    <figure className="img-container">
      <img
        src={BarberApp_3}
        alt="png"
        style={{ height: "100%", width: "100%" }}
      />
      <figcaption className="img-caption">
        Golden Gate Bridge, Sanfrancisco
      </figcaption>
    </figure>
  );
  const slide3Template = () => (
    <figure className="img-container">
      <img
        src={BarberApp_4}
        alt="png"
        style={{ height: "100%", width: "100%" }}
      />
      <figcaption className="img-caption">
        Golden Gate Bridge, Sanfrancisco
      </figcaption>
    </figure>
  );
  const slide4Template = () => (
    <figure className="img-container">
      <img
        src={BarberApp_5}
        alt="png"
        style={{ height: "100%", width: "100%" }}
      />
      <figcaption className="img-caption">
        Golden Gate Bridge, Sanfrancisco
      </figcaption>
    </figure>
  );
  const slide5Template = () => (
    <figure className="img-container">
      <img
        src={BarberApp_6}
        alt="png"
        style={{ height: "100%", width: "100%" }}
      />
      <figcaption className="img-caption">
        Golden Gate Bridge, Sanfrancisco
      </figcaption>
    </figure>
  );
  return (
    <div className="container">
      <div className="carousel-sample">
        <CarouselComponent cssClass="default-carousel">
          <CarouselItemsDirective>
            <CarouselItemDirective
              template={slide1Template}
            ></CarouselItemDirective>
            <CarouselItemDirective
              template={slide2Template}
            ></CarouselItemDirective>
            <CarouselItemDirective
              template={slide3Template}
            ></CarouselItemDirective>
            <CarouselItemDirective
              template={slide4Template}
            ></CarouselItemDirective>
            <CarouselItemDirective
              template={slide5Template}
            ></CarouselItemDirective>
          </CarouselItemsDirective>
        </CarouselComponent>
      </div>
    </div>
  );
};
