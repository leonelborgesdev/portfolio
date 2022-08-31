import React from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import breeds2 from "../../assets/breeds2.png";
import BarberApp2 from "../../assets/BarberApp2.png";
// import BarberApp3 from "../../assets/BarberApp3.png";
// import BarberApp4 from "../../assets/BarberApp4.png";
// import BarberApp5 from "../../assets/BarberApp5.png";
// import BarberApp6 from "../../assets/BarberApp6.png";
// import BarberApp7 from "../../assets/BarberApp7.png";
import Countries2 from "../../assets/Countries2.png"; //Countries
import marketplace2 from "../../assets/marketplace2.png";
import "./BtnVideo.css";

export const BtnVideo = () => {
  const { cards, language, mode } = useSelector((state) => state);
  const { id } = useParams();
  const card = cards.filter((card) => card.id === id);
  const btnPlayRef = useRef();
  const clipRef = useRef();
  const closeRef = useRef();
  // const handleAddClass = () => {
  //   const btnPlayRefNode = btnPlayRef.current;
  //   const clipRefNode = clipRef.current;
  //   btnPlayRefNode.classList.add("active");
  //   clipRefNode.classList.add("active");
  // };
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
          <img
            src={
              card[0].id === "1"
                ? breeds2
                : card[0].id === "2"
                ? BarberApp2
                : card[0].id === "3"
                ? marketplace2
                : Countries2
            }
            alt="pr1"
          />
          <h4>{card[0].detail}</h4>
          {card[0].description.map((descriptio, index) => (
            <h5 key={index}>{descriptio}</h5>
          ))}
        </div>
        {/* <div className="btn_play" ref={btnPlayRef} onClick={handleAddClass}>
          <div className="play"></div>
          <p>Play Video</p>
        </div> */}
        <Link to={`/`}>{language === "español" ? "Volver" : "Back"}</Link>
        <div className="clip" ref={clipRef}>
          <div>Video {card[0].title}</div>
          {/* <iframe
            width="853"
            height="480"
            src="https://www.youtube.com/embed/6ZD9OhFFKkk"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe> */}
          <b className="close" ref={closeRef} onClick={handleRemove}>
            {language === "español" ? "Cerrar" : "Close"}
          </b>
        </div>
      </div>
    </div>
  );
};
