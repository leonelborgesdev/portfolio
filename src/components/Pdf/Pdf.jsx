import { render } from "@testing-library/react";
import React from "react";

export const Pdf = () => {
  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      <object
        data={require("../../doc/CV-LeonelBorges.pdf")}
        type="application/pdf"
        width={"100%"}
        height={"100%"}
      ></object>
    </div>
  );
};
