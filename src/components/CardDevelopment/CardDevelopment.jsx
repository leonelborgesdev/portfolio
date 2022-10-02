import React from "react";
import pokemons from "../../assets/pokemons.png";
import "./CardDevelopment.css";

export const CardDevelopment = ({ card, id }) => {
  return (
    <div className="cardDevelopment">
      <span></span>
      <div className="container_img_dev">
        <img src={pokemons} alt="image" />
      </div>
    </div>
  );
};
