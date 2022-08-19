import React from "react";
import "./Card.css";
import { useSelector } from "react-redux";

export const Card = ({ card, id }) => {
  const { languaje } = useSelector((state) => state);
  return (
    <div className="container_card_all">
      <div className="container_card" id={id}>
        <div className="card">
          <div className="cover">
            <img src={card.img} alt="pr1" width={"280px"} />{" "}
          </div>
          <div className="details">
            <img src={card.img2} alt="pr1" width={"380px"} />
            <h2>{card.title}</h2>
            <h3>{card.detail}</h3>
            <a href={`/${card.id}`}>
              {languaje === "español" ? "Detalle" : "Detail"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
