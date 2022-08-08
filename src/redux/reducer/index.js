import proy1 from "../../assets/proy1.png";
import proy1_2 from "../../assets/proy1_2.png";

const initialState = {
  cards: [
    {
      img: proy1,
      img2: proy1_2,
      title: "Breeds",
      detail:
        "Desarrollo de un SPA ( Single Page Application) encargada de crear, modificar, listar, ordenar y filtrar la información de las diferentes razas de perros. Dicha información se obtiene desde una API ( The Dog ) y de una Base de Datos Local",
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
