import { CHANGE_LANGUAGE, CHANGE_MODE } from "./types";

export const changeMode = (mode) => {
  return function (dispatch) {
    dispatch({
      type: CHANGE_MODE,
      payload: mode,
    });
  };
};
export const changeLanguaje = (language, cards) => {
  return function (dispatch) {
    dispatch({
      type: CHANGE_LANGUAGE,
      payload: language,
      payloadMenu: menuFooter(language),
      payloadCards: CardsHome(language, cards),
    });
  };
};
const CardsHome = (language, cards) => {
  if (cards !== false) {
    if (language === "español") {
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
const menuFooter = (language) => {
  if (language === "español") {
    return [
      { id: "inicio", name: "Inicio" },
      { id: "about", name: "Acerca de mi" },
      { id: "proyectos", name: "Proyectos" },
      { id: "habilidadesTecnicas", name: "Habilidades Tecnicas" },
      { id: "habilidadesBlandas", name: "Habilidades Blandas" },
      { id: "contactame", name: "Contactame" },
    ];
  } else {
    return [
      { id: "inicio", name: "Home" },
      { id: "about", name: "About" },
      { id: "proyectos", name: "Projects" },
      { id: "habilidadesTecnicas", name: "Technical Skills" },
      { id: "habilidadesBlandas", name: "Soft Skills" },
      { id: "contactame", name: "Contact me" },
    ];
  }
};
