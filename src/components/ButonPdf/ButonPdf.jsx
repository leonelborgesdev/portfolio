import React from "react";
import CVLeonelBorges from "../../doc/CVLeonelBorges.pdf";
import { useRef } from "react";
import "./ButonPdf.css";

const ButonPdf = () => {
  const btnRef = useRef();
  const btnId = document.getElementById("btn");
  //   console.log(btnRef.current);

  //   btn.onMouseMove = (e) => {};
  //   (e) => {
  //     const x = e.pageX - btn.offsetLeft;
  //     const y = e.pageY - btn.offsetTop;
  //     btn.getElementsByClassName.setProperty("--x", x + "px");
  //     btn.getElementsByClassName.setProperty("--y", y + "px");
  //   }
  const handelOnMouseMove = (e) => {
    console.log(btnRef.current);
    console.log("id", btnId);
    const x = e.pageX - btnRef.current.offsetLeft;
    const y = e.pageY - btnRef.current.offsetTop;
    // btnRef.current.setProperty("--x", x + "px");
    // btnRef.current.setProperty("--y", y + "px");
  };
  return (
    <div className="container_all_button">
      <div className="container_body_button">
        <a
          id="btn"
          href={CVLeonelBorges}
          target={"_blank"}
          className="btn"
          onMouseMove={handelOnMouseMove}
          ref={btnRef}
        >
          <span>Curriculum</span>
        </a>
      </div>
    </div>
  );
};

export default ButonPdf;
