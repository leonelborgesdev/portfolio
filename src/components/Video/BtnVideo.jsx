import React from "react";
import { useRef } from "react";
import ReactPlayer from "react-player";
import "./BtnVideo.css";

export const BtnVideo = () => {
  const btnPlayRef = useRef();
  const handleAddClass = () => {
    const btnPlayRefNode = btnPlayRef.current;
    btnPlayRefNode.classList.add("active");
  };
  return (
    <div className="container_all_video">
      <div className="container_body_video">
        <div className="btn_play" ref={btnPlayRef} onClick={handleAddClass}>
          <div className="play"></div>
          <p>Play Video</p>
        </div>
        <div className="clip">
          <iframe
            width="853"
            height="480"
            src="https://www.youtube.com/embed/6ZD9OhFFKkk"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
          <b>Close</b>
        </div>
      </div>
    </div>
  );
};
