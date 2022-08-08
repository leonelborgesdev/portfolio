import React from "react";
import proy1 from "../../assets/proy1.png";
import proy1_2 from "../../assets/proy1_2.png";
import "./Card.css";

export const Card = () => {
  return (
    <div className="container_card_all">
      <div className="container_card">
        <div className="card">
          <div className="cover">
            {" "}
            <img src={proy1_2} alt="pr1" />{" "}
          </div>
          <div className="details">
            <div>
              <img src={proy1} alt="pr1" />
              <h3>Breeds</h3>
              <h2>
                <sup>$</sup>450
              </h2>
              <a href="#">Detail</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
