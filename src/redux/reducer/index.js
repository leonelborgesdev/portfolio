import proy1 from "../../assets/proy1.png";
import proy1_2 from "../../assets/proy1_2.png";
import BarberApp_2 from "../../assets/BarberApp_2.png";
import Countries_2 from "../../assets/Countries_2.png"; //Countries
import Countries from "../../assets/Countries.png";
import BarberApp from "../../assets/BarberApp.png";
import { CHANGE_LANGUAJE, CHANGE_MODE } from "../action/types";
import { act } from "@testing-library/react";

const initialState = {
  cards: [
    {
      img: proy1,
      img2: proy1_2,
      title: "BREEDS",
      detail:
        "Desarrollo de un SPA ( Single Page Application) encargada de crear, modificar, listar, ordenar y filtrar la información de las diferentes razas de perros. Dicha información se obtiene desde una API ( The Dog ) y de una Base de Datos Local",
    },
    {
      img: BarberApp,
      img2: BarberApp_2,
      title: "BARBERAPP",
      detail:
        "Desarrollo de una pagina web responsive para una barberia. La cual permite al usuario reservar sus citas con un barbero en especifico, mas un mini ecomerce que le permite al usuario comprar productos de la barberia.",
    },
    {
      img: proy1,
      img2: proy1_2,
      title: "MUNDOMARKET",
      detail:
        "Participe en el desarrollo de una pagina web e-comerce en la que cada usuario puede realizar compras de productos y ofrecer o vender sus productos.",
    },
    {
      img: Countries,
      img2: Countries_2,
      title: "COUNTRIES",
      detail:
        "Desarrollo de un SPA ( Single Page Application) encargada de crear, eliminar, listar, ordenar y filtrar la información de diferentes paises. Dicha información se obtiene desde una API ( Restcountries ) y de una Base de Datos Local",
    },
  ],
  about_me: [
    "👋🏻Hola !!!😃",
    "Me llamo Leonel Borges, soy de la desarrollador web, vivo en la ciudad de Bermejo, de Tarija Bolivia, mis hobies son el voley, la natacion y los deportes. Soy Graduado Full Stack Developer, con aptitudes en Backend y Frontend. Me gusta programar, me gusta aprender mas dia a dia y trato de mejorar mis habilidades estudiando, practicando y participando en proyectos de tecnilogia.",
    "🔥Fortalezas: El trabajo en equipo se me da muy bien, me adapto facilmente a los cambios, soy participativo, consulto y también doy asesoría a mis compañeros de equipo, si hay algo que no se, lo investigo y me esfuerzo mucho por encontrar la respuesta.",
    "🧑‍💻💼Experiencia: Por ahora mi experiencia es netamente academica, participando en proyectos individuales y grupales como ser los proyectos en henry y otros, tambien he sido ayudante de catedra en la UAJMS, ayudando a los chicos con sus practicos, tareas y preparandolos para sus examenes de programacion en Java",
  ],
  menu_footer: ["Inicio", "About", "Servicios", "Equipo", "Contacto"],
  company_footer: "©2022 Borges | Todos los Derechos Reservados",
  mode: "light",
  languaje: "español",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MODE: {
      return {
        ...state,
        mode: action.payload,
      };
    }
    case CHANGE_LANGUAJE: {
      return {
        ...state,
        languaje: action.payload,
        about_me: action.payloadAboutMe,
        menu_footer: action.payloadMenu,
        company_footer: action.payloadCompany,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
