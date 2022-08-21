import proy1 from "../../assets/proy1.png";
import proy1_2 from "../../assets/proy1_2.png";
import BarberApp_2 from "../../assets/BarberApp_2.png";
import Countries_2 from "../../assets/Countries_2.png"; //Countries
import Countries from "../../assets/Countries.png";
import BarberApp from "../../assets/BarberApp.png";
import proy3 from "../../assets/proy3.png";
import proy3_2 from "../../assets/proy3_2.png";
import { CHANGE_LANGUAJE, CHANGE_MODE } from "../action/types";

const initialState = {
  cards: [
    {
      id: "1",
      color: "blue",
      img: proy1,
      img2: proy1_2,
      title: "BREEDS",
      detail:
        "Desarrollo de un SPA ( Single Page Application) encargada de crear, modificar, listar, ordenar y filtrar la información de las diferentes razas de perros. Dicha información se obtiene desde una API ( The Dog ) y de una Base de Datos Local",
      description: [
        "Frontend: React, Redux, JavaScript, CSS(PURO).",
        "Backend: Node, Express, PostgreSql, Sequelize.",
      ],
    },
    {
      id: "2",
      color: "yellow",
      img: BarberApp,
      img2: BarberApp_2,
      title: "BARBERAPP",
      detail:
        "Desarrollo de una pagina web responsive para una barberia. La cual permite al usuario reservar sus citas con un barbero en especifico, mas un mini ecomerce que le permite al usuario comprar productos de la barberia.",
      description: [
        "Metodologia: Scrum.",
        "Frontend: React, Redux, JavaScript, Boopstrap, CSS(PURO).",
        "Backend: Node, Express, PostgreSql, Sequelize.",
        "Frontend Graphics: Char.js",
      ],
    },
    {
      id: "3",
      color: "grey",
      img: proy3,
      img2: proy3_2,
      title: "MUNDOMARKET",
      detail:
        "Participe en el desarrollo de una pagina web e-comerce en la que cada usuario puede realizar compras de productos y ofrecer o vender sus productos.",
      description: [
        "Metodologia: Scrum.",
        "Frontend: React, Redux, TypeScript, CSS, MaterialUI.",
        "Backend: Node, Express, Mongodb, Mongoose, Sequelize.",
      ],
    },
    {
      id: "4",
      color: "purple",
      img: Countries,
      img2: Countries_2,
      title: "COUNTRIES",
      detail:
        "Desarrollo de un SPA ( Single Page Application) encargada de crear, eliminar, listar, ordenar y filtrar la información de diferentes paises. Dicha información se obtiene desde una API ( Restcountries ) y de una Base de Datos Local",
      description: [
        "Frontend: React, Redux, JavaScript, CSS(PURO).",
        "Backend: Node, Express, PostgreSql, Sequelize.",
      ],
    },
  ],
  about_me: [
    "👋🏻Hola !!!😃",
    "Me llamo Leonel Borges, soy desarrollador web, vivo en la ciudad de Bermejo, de Tarija Bolivia, mis hobies son el voley, la natacion y los deportes. Soy Graduado Full Stack Developer, con aptitudes en Backend y Frontend. Me gusta programar, me gusta aprender mas dia a dia y trato de mejorar mis habilidades estudiando, practicando y participando en proyectos de tecnilogia.",
    "🔥Fortalezas: El trabajo en equipo se me da muy bien, me adapto facilmente a los cambios, soy participativo, consulto y también doy asesoría a mis compañeros de equipo, si hay algo que no se, lo investigo y me esfuerzo mucho por encontrar la respuesta.",
    "🧑‍💻💼Experiencia: Por ahora mi experiencia es netamente academica, participando en proyectos individuales y grupales como ser los proyectos en henry y otros, tambien he sido ayudante de catedra en la UAJMS, ayudando a los chicos con sus practicos, tareas y preparandolos para sus examenes de programacion en Java",
  ],
  menu_footer: [
    { id: "inicio", name: "Inicio" },
    { id: "about", name: "Acerca de mi" },
    { id: "proyectos", name: "Proyectos" },
    { id: "habilidadesTecnicas", name: "Habilidades Tecnicas" },
    { id: "habilidadesBlandas", name: "Habilidades Blandas" },
  ],
  mode: "dark",
  language: "español",
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
        language: action.payload,
        about_me: action.payloadAboutMe,
        menu_footer: action.payloadMenu,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
