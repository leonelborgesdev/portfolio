import React, { useRef } from "react";
import { useSelector } from "react-redux";
import emailjs from "emailjs-com";
import "./Contacto.css";

export const Contacto = () => {
  const { mode, language } = useSelector((state) => state);
  const form = useRef();
  const handleEnviarEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmailMessage",
        "template_6n5qu8p",
        form.current,
        "lna8Tsiq7_5RTw76n"
      )
      .then(
        (result) => {
          alert("mensage enviado correctamente");
        },
        (error) => {
          alert(error);
        }
      );
    e.target.reset();
  };
  return (
    <form ref={form} onSubmit={handleEnviarEmail}>
      <div className="container_all_contact" id={mode}>
        <div className="container_body_contact">
          <div className="inputBox">
            <input type="text" required="required" name="name" />
            <span>{language === "español" ? "Nombre" : "Name"}</span>
          </div>
          <div className="inputBox">
            <input type="text" required="required" name="email" />
            <span>Email</span>
          </div>
          <div className="inputBox">
            <textarea name="message" />
            <span>{language === "español" ? "Mensaje" : "Messegger"}</span>
          </div>
          <div className="buton_submit_send">
            <input
              type="submit"
              value={language === "español" ? "Enviar" : "Send"}
            />
          </div>
        </div>
      </div>
    </form>
  );
};
