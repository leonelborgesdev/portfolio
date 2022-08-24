import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contacto.css";

export const Contacto = () => {
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
      <div className="container_all_contact">
        <div className="container_body_contact">
          <div className="inputBox">
            <input type="text" required="required" name="name" />
            <span>Nombre</span>
          </div>
          <div className="inputBox">
            <input type="text" required="required" name="email" />
            <span>Email</span>
          </div>
          <div className="inputBox">
            <textarea name="message" />
            <span>Mensaje</span>
          </div>
          <div>
            <input type="submit" />
          </div>
        </div>
      </div>
    </form>
  );
};
