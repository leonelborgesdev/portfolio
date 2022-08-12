import { CHANGE_LANGUAJE, CHANGE_MODE } from "./types";

export const changeMode = (mode) => {
  return function (dispatch) {
    dispatch({
      type: CHANGE_MODE,
      payload: mode,
    });
  };
};
export const changeLanguaje = (languaje, cards) => {
  return function (dispatch) {
    dispatch({
      type: CHANGE_LANGUAJE,
      payload: languaje,
      payloadAboutMe: aboutMe(languaje),
      payloadMenu: menuFooter(languaje),
      payloadCompany: compañiaFooter(languaje),
      payloadCards: CardsHome(languaje, cards),
    });
  };
};
const CardsHome = (languaje, cards) => {
  if (cards !== false) {
    if (languaje === "español") {
      cards[0].detail =
        "Desarrollo de un SPA ( Single Page Application) encargada de crear, modificar, listar, ordenar y filtrar la información de las diferentes razas de perros. Dicha información se obtiene desde una API ( The Dog ) y de una Base de Datos Local";
      cards[1].detail =
        "Desarrollo de una pagina web responsive para una barberia. La cual permite al usuario reservar sus citas con un barbero en especifico, mas un mini ecomerce que le permite al usuario comprar productos de la barberia.";
      cards[2].detail =
        "Participe en el desarrollo de una pagina web e-comerce en la que cada usuario puede realizar compras de productos y ofrecer o vender sus productos.";
      cards[3].detail =
        "Desarrollo de un SPA ( Single Page Application) encargada de crear, eliminar, listar, ordenar y filtrar la información de diferentes paises. Dicha información se obtiene desde una API ( Restcountries ) y de una Base de Datos Local";
    } else {
      cards[0].detail = "Texto en ingles";
      cards[1].detail = "Texto en ingles";
      cards[2].detail = "Texto en ingles";
      cards[3].detail = "Texto en ingles";
    }
    return cards;
  }
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
