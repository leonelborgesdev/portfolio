import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Carrusel.css";
import { useEffect } from "react";

export const Carrusel = () => {
  const { cards } = useSelector((state) => state);
  const { id } = useParams();
  const card = cards.filter((card) => card.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (card[0].images?.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % card[0].images.length);
      }, 2000); // Cambia el tiempo de transición según tus necesidades

      return () => clearInterval(intervalId);
    }
  }, [currentIndex]); //
  return (
    <div className="carousel-container">
      {console.log(card[0].images.length)}
      {card[0].images &&
        card[0].images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img src={image} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
    </div>
  );
};
