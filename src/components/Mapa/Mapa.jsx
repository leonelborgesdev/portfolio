import React from "react";
import "./Mapa.css";

export const Mapa = () => {
  return (
    <div className="container_all_map">
      <div className="container_body_map">
        <div className="mapBox">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d919.9505488756452!2d-64.33983686826343!3d-22.73559237493494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m3!3m2!1d-22.7355417!2d-64.3398771!4m0!5e0!3m2!1ses!2sbo!4v1661328051189!5m2!1ses!2sbo"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
