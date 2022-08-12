import { CHANGE_LANGUAJE, CHANGE_MODE } from "./types";

export const changeMode = (mode) => {
  return function (dispatch) {
    dispatch({
      type: CHANGE_MODE,
      payload: mode,
    });
  };
};
export const changeLanguaje = (languaje) => {
  return function (dispatch) {
    dispatch({
      type: CHANGE_LANGUAJE,
      payload: languaje,
      payloadAboutMe: aboutMe(languaje),
      payloadMenu: menuFooter(languaje),
      payloadCompany: compañiaFooter(languaje),
    });
  };
};
const aboutMe = (languaje) => {
  if (languaje === "español") {
    return [
      "👋🏻Hola !!!😃",
      "Me llamo Leonel Borges, soy desarrollador web, vivo en la ciudad de Bermejo, de Tarija Bolivia, mis hobies son el voley, la natacion y los deportes. Soy Graduado Full Stack Developer, con aptitudes en Backend y Frontend. Me gusta programar, me gusta aprender mas dia a dia y trato de mejorar mis habilidades estudiando, practicando y participando en proyectos de tecnilogia.",
      "🔥Fortalezas: El trabajo en equipo se me da muy bien, me adapto facilmente a los cambios, soy participativo, consulto y también doy asesoría a mis compañeros de equipo, si hay algo que no se, lo investigo y me esfuerzo mucho por encontrar la respuesta.",
      "🧑‍💻💼Experiencia: Por ahora mi experiencia es netamente academica, participando en proyectos individuales y grupales como ser los proyectos en henry y otros, tambien he sido ayudante de catedra en la UAJMS, ayudando a los chicos con sus practicos, tareas y preparandolos para sus examenes de programacion en Java",
    ];
  } else {
    return [
      "👋🏻Hi !!!😃",
      "My name is Leonel Borges, i am a developer web, im live in the city Bermejo, from Tarija Bolivia, mis hobies son el voley, la natacion y los deportes. Soy Graduado Full Stack Developer, con aptitudes en Backend y Frontend. Me gusta programar, me gusta aprender mas dia a dia y trato de mejorar mis habilidades estudiando, practicando y participando en proyectos de tecnilogia.",
      "🔥Fortalezas: El trabajo en equipo se me da muy bien, me adapto facilmente a los cambios, soy participativo, consulto y también doy asesoría a mis compañeros de equipo, si hay algo que no se, lo investigo y me esfuerzo mucho por encontrar la respuesta.",
      "🧑‍💻💼Experiencia: Por ahora mi experiencia es netamente academica, participando en proyectos individuales y grupales como ser los proyectos en henry y otros, tambien he sido ayudante de catedra en la UAJMS, ayudando a los chicos con sus practicos, tareas y preparandolos para sus examenes de programacion en Java",
    ];
  }
};
const menuFooter = (languaje) => {
  if (languaje === "español") {
    return ["Inicio", "About", "Servicios", "Equipo", "Contacto"];
  } else {
    return ["Home", "About", "Services", "Team", "Contact"];
  }
};
const compañiaFooter = (languaje) => {
  if (languaje === "español") {
    return "©2022 Borges | Todos los Derechos Reservados";
  } else {
    return "©2022 Borges | All Rights Reserved";
  }
};
