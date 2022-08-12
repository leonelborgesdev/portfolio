import React from "react";
import "./Card.css";
import proy1 from "../../assets/proy1.png";
import proy1_2 from "../../assets/proy1_2.png";
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
            <div>
              <img src={card.img2} alt="pr1" width={"380px"} />
              <h3>{card.title}</h3>
              <h2>{card.detail}</h2>
              <a href="#">{languaje === "español" ? "Detalle" : "Detail"}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
