import React, { useRef } from "react";
import emailjs from "emailjs-com";

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
  };
  return (
    <div className="container">
      <form ref={form} onSubmit={handleEnviarEmail}>
        <div>
          <label>Nombre</label>
          <input type="text" placeholder="Nombre" name="name" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" placeholder="Email" name="email" />
        </div>
        <div>
          <label>Mensaje</label>
          <textarea placeholder="Mensaje" name="message" />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};
