import React from "react";
import "./ButonPdf.css";

export const ButonPdf = () => {
  const btn = document.querySelector("btn");
  console.log(btn);
  //   btn.onMouseMove = (e) => {};
  //   (e) => {
  //     const x = e.pageX - btn.offsetLeft;
  //     const y = e.pageY - btn.offsetTop;
  //     btn.getElementsByClassName.setProperty("--x", x + "px");
  //     btn.getElementsByClassName.setProperty("--y", y + "px");
  //   }
  const handelOnMouseMove = (e) => {
    console.log(e);
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;
  };
  return (
    <div className="container_all_button">
      <div className="container_body_button">
        <a href="#" className="btn" onMouseMove={handelOnMouseMove}>
          <span>Button</span>
        </a>
      </div>
    </div>
  );
};
