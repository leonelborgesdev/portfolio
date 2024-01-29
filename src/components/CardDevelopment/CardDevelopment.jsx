import React from "react";
import breeds from "../../assets/breeds.png";
import BarberApp from "../../assets/BarberApp.png";
import Countries from "../../assets/Countries.png";
import marketplace from "../../assets/marketplace.png";
import "./CardDevelopment.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const CardDevelopment = ({ card, id }) => {
  const { language } = useSelector((state) => state);
  return (
    <div id={id}>
      <div className="cardDevelopment">
        <span></span>
        <div className="container_img_dev">
          <img
            src={
              card.id === "1"
                ? breeds
                : card.id === "2"
                ? BarberApp
                : card.id === "3"
                ? marketplace
                : card.id === "4"
                ? Countries
                : "https://github.com/leonelborgesdev/portfolio/assets/95236206/73c13f5f-8e7e-4850-9210-e47a10586751"
            }
            alt="png"
          />
        </div>
        <h2>{card.title}</h2>
        <h3>{card.detail}</h3>
        <Link to={`/${card.id}`}>
          {language === "español" ? "Detalle" : "Detail"}
        </Link>
      </div>
    </div>
  );
};
