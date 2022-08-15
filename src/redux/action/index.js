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
      payloadSeparadores: separadoresPortfolio(languaje),
    });
  };
};
const CardsHome = (languaje, cards) => {
  if (cards !== false) {
    if (languaje === "español") {
      cards[0].detail =
        "Desarrollo de un SPA ( Single Page Application) encargada de Crear, Modificar, Listar, Ordenar y Filtrar la información de las diferentes razas de perros. Dicha información se obtiene desde una API ( The Dog ) y de una Base de Datos Local";
      cards[1].detail =
        "Desarrollo de una pagina web responsive para una barberia. La cual permite al usuario reservar sus citas con un barbero en especifico, mas un mini e-comerce que le permite al usuario comprar productos de la barberia. Permite al Administrador centralizar, administrar y gestionar la informacion de su barberia, tambien poder ver los datos generales de la barberia, mas graficos y tablas de sus ventas y citas reservadas.";
      cards[2].detail =
        "Participe en el desarrollo de una pagina web e-comerce marketplace, en la que cada usuario puede comprar productos y ofrecer o vender sus productos, tambien cuenta con un dashboard, el cual muestra los datos generales del administrador.";
      cards[3].detail =
        "Desarrollo de un SPA ( Single Page Application) encargada de Crear, Eliminar, Listar, Ordenar y Filtrar la información de diferentes paises. Dicha información se obtiene desde una API ( Restcountries ) y de una Base de Datos Local.";
    } else {
      cards[0].detail =
        "Development of a SPA (Single Page Application) in charge of Creating, Modifying, Listing, Ordering and Filtering the information of the different breeds of dogs. Said information is obtained from an API (The Dog) and from a Local Database";
      cards[1].detail =
        "Development of a responsive website for a barbershop. Which allows the user to book their appointments with a specific barber, plus a mini e-commerce that allows the user to buy products from the barbershop. It allows the Administrator to centralize, administer and manage the information of his barbershop, also to be able to see the general data of the barbershop, more graphs and tables of his sales and reserved appointments.";
      cards[2].detail =
        "Participate in the development of an e-commerce marketplace website, in which each user can buy products and offer or sell their products, it also has a dashboard, which shows the general data of the administrator.";
      cards[3].detail =
        "Development of a SPA (Single Page Application) responsible for creating, deleting, listing, ordering and filtering information from different countries. This information is obtained from an API ( Restcountries ) and a Local Database.";
    }
    return cards;
  }
};
const aboutMe = (languaje) => {
  if (languaje === "español") {
    return [
      "👋🏻Hola !!!😃",
      "Me llamo Leonel Borges, soy desarrollador web, vivo en la ciudad de Bermejo, de Tarija Bolivia, mis hobies son el voley, la natacion y los deportes. Soy Graduado Full Stack Developer, con aptitudes en Backend y Frontend. Me gusta programar, me gusta aprender mas dia a dia y trato de mejorar mis habilidades estudiando, practicando y participando en proyectos de tecnilogia.",
      "🔥Fortalezas: Soy perseverante, si hay algo que no se, hago todo lo posible por encontrar la solucion, investigo sobre el tema consulto con mis compañeros de equipo, acepto concejos, opiniones y criticas con la idea de mejorar y encontrar la mejor solucion posible. Trabajo en equipo, ayudo a mis compañeros si lo necesitan con tal de que todo el equipo pueda cumplir sus objetivos.",
      "🧑‍💻💼Experiencia: Por ahora mi experiencia es netamente academica, participando en proyectos individuales y grupales como ser los proyectos en henry y otros, tambien he sido ayudante de catedra en la UAJMS, ayudando a los chicos con sus practicos, tareas y preparandolos para sus examenes de programacion en Java.",
    ];
  } else {
    return [
      "👋🏻Hi !!!😃",
      "My name is Leonel Borges, I am a web developer, I live in the city of Bermejo, Tarija Bolivia, my hobbies are volleyball, swimming and sports. I am a Henry Full Stack Developer Graduate, with skills in Backend and Frontend. I like programming, I like to learn more every day and I try to improve my skills by studying, practicing and participating in technology projects.",
      "🔥Strengths: I am persevering, if there is something I don't know, I do everything possible to find the solution, I investigate the subject, I consult with my teammates, I accept advice, opinions and criticism with the idea of improving and finding the best possible solution. I work as a team, I help my colleagues if they need it so that the whole team can meet its objectives.",
      "🧑‍💻💼Experience: For now my experience is purely academic, participating in individual and group projects such as the projects in Henry and others, I have also been a teaching assistant at the UAJMS, helping the boys with their practices, homework and preparing them for their exams. Java programming.",
    ];
  }
};
const menuFooter = (languaje) => {
  if (languaje === "español") {
    return [
      { id: "inicio", name: "Inicio" },
      { id: "about", name: "Acerca de mi" },
      { id: "servicios", name: "Servicios" },
      { id: "contacto", name: "Contacto" },
    ];
  } else {
    return [
      { id: "inicio", name: "Home" },
      { id: "about", name: "About" },
      { id: "servicios", name: "Services" },
      { id: "contacto", name: "Contact" },
    ];
  }
};
const compañiaFooter = (languaje) => {
  if (languaje === "español") {
    return "©2022 Borges | Todos los Derechos Reservados";
  } else {
    return "©2022 Borges | All Rights Reserved";
  }
};
const separadoresPortfolio = (languaje) => {
  if (languaje === "español") {
    return ["Proyectos", "Habilidades"];
  } else {
    return ["Projects", "Skills"];
  }
};
