import React from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./BtnVideo.css";

export const BtnVideo = () => {
  const { cards, languaje } = useSelector((state) => state);
  const { id } = useParams();
  const card = cards.filter((card) => card.id === id);
  const btnPlayRef = useRef();
  const clipRef = useRef();
  const closeRef = useRef();
  const handleAddClass = () => {
    const btnPlayRefNode = btnPlayRef.current;
    const clipRefNode = clipRef.current;
    btnPlayRefNode.classList.add("active");
    clipRefNode.classList.add("active");
  };
  const handleRemove = () => {
    const btnPlayRefNode = btnPlayRef.current;
    const clipRefNode = clipRef.current;
    btnPlayRefNode.classList.remove("active");
    clipRefNode.classList.remove("active");
  };
  return (
    <div className="container_all_video">
      <div className="container_body_video" id={card[0].color}>
        <div className="detail">
          <h1>{card[0].title}</h1>
          <img src={card[0].img2} alt="pr1" />
          <h4>{card[0].detail}</h4>
        </div>
        <div className="btn_play" ref={btnPlayRef} onClick={handleAddClass}>
          <div className="play"></div>
          <p>Play Video</p>
          <a href={`/`}>{languaje === "español" ? "Volver" : "Back"}</a>
        </div>
        <div className="clip" ref={clipRef}>
          <div>Video {card[0].title}</div>
          {/* <iframe
            width="853"
            height="480"
            src="https://www.youtube.com/embed/6ZD9OhFFKkk"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe> */}
          <b className="close" ref={closeRef} onClick={handleRemove}>
            {languaje === "español" ? "Cerrar" : "Close"}
          </b>
        </div>
      </div>
    </div>
  );
};
