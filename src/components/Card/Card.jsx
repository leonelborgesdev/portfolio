import React from "react";
import "./Card.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import breeds2 from "../../assets/breeds2.png";
export const Card = ({ card, id }) => {
  const { language } = useSelector((state) => state);
  return (
    <div className="container_card_all">
      <div className="container_card" id={id}>
        <div className="card">
          <div className="cover">
            <img src={`../../assets/${card.img}`} alt="png" width={"280px"} />
          </div>
          <div className="details">
            <img src={breeds2} alt="png" width={"380px"} />
            <h2>{card.title}</h2>
            <h3>{card.detail}</h3>
            <Link to={`/${card.id}`}>
              {language === "español" ? "Detalle" : "Detail"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
