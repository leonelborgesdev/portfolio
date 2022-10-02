import React from "react";
import pokemons from "../../assets/pokemons.png";
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
              : pokemons
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
  );
};
