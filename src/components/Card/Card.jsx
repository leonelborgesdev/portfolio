import React from "react";
import "./Card.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import breeds from "../../assets/breeds.png";
import breeds2 from "../../assets/breeds2.png";
import BarberApp from "../../assets/BarberApp.png";
import BarberApp2 from "../../assets/BarberApp2.png";
// import BarberApp3 from "../../assets/BarberApp3.png";
// import BarberApp4 from "../../assets/BarberApp4.png";
// import BarberApp5 from "../../assets/BarberApp5.png";
// import BarberApp6 from "../../assets/BarberApp6.png";
// import BarberApp7 from "../../assets/BarberApp7.png";
import Countries from "../../assets/Countries.png";
import Countries2 from "../../assets/Countries2.png"; //Countries
import marketplace from "../../assets/marketplace.png";
import marketplace2 from "../../assets/marketplace2.png";

export const Card = ({ card, id }) => {
  const { language } = useSelector((state) => state);
  return (
    <div className="container_card_all">
      <div className="container_card" id={id}>
        <div className="card">
          <div className="cover">
            <img
              src={
                card.id === "1"
                  ? breeds
                  : card.id === "2"
                  ? BarberApp
                  : card.id === "3"
                  ? marketplace
                  : Countries
              }
              alt="png"
              width={"280px"}
            />
          </div>
          <div className="details">
            <img
              src={
                card.id === "1"
                  ? breeds2
                  : card.id === "2"
                  ? BarberApp2
                  : card.id === "3"
                  ? marketplace2
                  : Countries2
              }
              alt="png"
              width={"380px"}
            />
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
