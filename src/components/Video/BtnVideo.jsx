import React from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./BtnVideo.css";
import { Carrusel } from "../Carrusel/Carrusel";

export const BtnVideo = () => {
  const { cards, language, mode } = useSelector((state) => state);
  const { id } = useParams();
  const card = cards.filter((card) => card.id === id);
  const btnPlayRef = useRef();
  const clipRef = useRef();
  const closeRef = useRef();
  const handleRemove = () => {
    const btnPlayRefNode = btnPlayRef.current;
    const clipRefNode = clipRef.current;
    btnPlayRefNode.classList.remove("active");
    clipRefNode.classList.remove("active");
  };
  return (
    <div className="container_all_video" id={mode}>
      <div className="container_body_video" id={card[0].color}>
        <div className="detail">
          <h1>{card[0].title}</h1>
          <Carrusel />
          <h4>{card[0].detail}</h4>
          {card[0].description.map((descriptio, index) => (
            <h5 key={index}>{descriptio}</h5>
          ))}
          <div className="link_deploy">
            <h4>
              {language === "español"
                ? "Link del Proyecto: "
                : "Project Link: "}
              {card[0].link_deploy === "En mantenimiento" && (
                <span>En Desarrollo</span>
              )}
            </h4>

            {card[0].link_deploy !== "En mantenimiento" && (
              <a
                href={card[0].link_deploy}
                target={"_blank"}
                rel={"noreferrer"}
              >
                {card[0].link_deploy}
              </a>
            )}
          </div>
        </div>
        <Link to={`/`} className="buton_back">
          {language === "español" ? "Volver" : "Back"}
        </Link>
        <div className="clip" ref={clipRef}>
          <div>Video {card[0].title}</div>
          <b className="close" ref={closeRef} onClick={handleRemove}>
            {language === "español" ? "Cerrar" : "Close"}
          </b>
        </div>
      </div>
    </div>
  );
};
