import React from "react";
import CVLeonelBorges from "../../doc/CVLeonelBorges.pdf";
import { useRef } from "react";
import "./ButonPdf.css";
import { useState } from "react";

const ButonPdf = () => {
  const btnRef = useRef();
  const [posicionX, setPosicionX] = useState("0px");
  const [posicionY, setPosicionY] = useState("0px");
  const handelOnMouseMove = (e) => {
    const x = e.pageX - btnRef.current.offsetLeft;
    const y = e.pageY - btnRef.current.offsetTop;
    setPosicionX(`${x}px`);
    setPosicionY(`${y}px`);
  };
  return (
    <div className="container_all_button">
      <div className="container_body_button">
        <a
          id="btn"
          href={CVLeonelBorges}
          target={"_blank"}
          style={{ "--y": posicionY, "--x": posicionX }}
          className="btn"
          onMouseMove={handelOnMouseMove}
          ref={btnRef}
        >
          <span>Ver Curriculum</span>
        </a>
      </div>
    </div>
  );
};

export default ButonPdf;
