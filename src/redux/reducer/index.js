import { CHANGE_LANGUAGE, CHANGE_MODE } from "../action/types";

const initialState = {
  cards: [
    {
      id: "1",
      color: "blue",
      title: "BREEDS",
      detail:
        "Desarrollo de un SPA ( Single Page Application) encargada de crear, modificar, listar, ordenar y filtrar la información de las diferentes razas de perros. Dicha información se obtiene desde una API ( The Dog ) y de una Base de Datos Local",
      description: [
        "Frontend: React, Redux, JavaScript, CSS(PURO).",
        "Backend: Node, Express, PostgreSql, Sequelize.",
      ],
      // link_deploy: "https://leonelbreeds.vercel.app/",
      link_deploy: "https://github.com/leonelborgesdev/Pi_Dogs.git",
      images: [
        "https://github.com/leonelborgesdev/CarruselImagenesInfinitoEjemplo/assets/95236206/3a703014-944c-4472-ae2b-b47c02febd4a",
        "https://github.com/leonelborgesdev/CarruselImagenesInfinitoEjemplo/assets/95236206/1f0c0ea2-c764-46fb-b913-f10beea434e8",
        "https://github.com/leonelborgesdev/CarruselImagenesInfinitoEjemplo/assets/95236206/e078251a-0899-4f93-a24f-7180fe47ebf8",
        "https://github.com/leonelborgesdev/CarruselImagenesInfinitoEjemplo/assets/95236206/e48ebee6-112c-4949-a7e6-3607b338838d",
        "https://github.com/leonelborgesdev/CarruselImagenesInfinitoEjemplo/assets/95236206/1a3747d7-ab1d-4c4f-8691-abe08bc814a0",
        "https://github.com/leonelborgesdev/CarruselImagenesInfinitoEjemplo/assets/95236206/8821dcb6-2f65-436d-a24f-74148a7d4d80",
        "https://github.com/leonelborgesdev/CarruselImagenesInfinitoEjemplo/assets/95236206/5c221ba5-fd28-4dd9-bd2e-3e2ee523704e",
        "https://github.com/leonelborgesdev/CarruselImagenesInfinitoEjemplo/assets/95236206/db9c08da-c672-4377-9b8f-f3ad0fecfaf1",
      ],
    },
    {
      id: "2",
      color: "yellow",
      title: "BARBERAPP",
      detail:
        "Desarrollo de una pagina web responsive para una barberia. La cual permite al usuario reservar sus citas con un barbero en especifico, mas un mini ecomerce que le permite al usuario comprar productos de la barberia.",
      description: [
        "Metodologia: Scrum.",
        "Frontend: React, Redux, JavaScript, Boopstrap, CSS(PURO).",
        "Backend: Node, Express, PostgreSql, Sequelize.",
        "Frontend Graphics: Char.js",
      ],
      // link_deploy: "http://barber-app-henry.herokuapp.com",
      link_deploy:
        "https://github.com/leonelborgesdev/Proyecto-Final-BarberApp",
      images: [
        "https://github.com/leonelborgesdev/leonelborgesdev/assets/95236206/173a4733-ed7c-424b-aede-6c87b054d624",
        "https://github.com/leonelborgesdev/leonelborgesdev/assets/95236206/a2b0d113-4e62-4db0-aa96-13487e8c8bd2",
        "https://github.com/leonelborgesdev/leonelborgesdev/assets/95236206/340759a6-66a8-4866-b425-264b6c37fe23",
        "https://github.com/leonelborgesdev/CarruselImagenesInfinitoEjemplo/assets/95236206/513a5206-e31c-4819-beab-06859bc70224",
        "https://github.com/leonelborgesdev/CarruselImagenesInfinitoEjemplo/assets/95236206/bf7500cb-31e3-44cc-9dc9-bbbf2a0d9d4d",
        "https://github.com/leonelborgesdev/CarruselImagenesInfinitoEjemplo/assets/95236206/abcc931d-d263-4c1e-a77c-eeac9354e716",
      ],
    },
    {
      id: "3",
      color: "grey",
      title: "MUNDOMARKET",
      detail:
        "Participe en el desarrollo de una pagina web e-comerce en la que cada usuario puede realizar compras de productos y ofrecer o vender sus productos.",
      description: [
        "Metodologia: Scrum.",
        "Frontend: React, Redux, TypeScript, CSS, MaterialUI.",
        "Backend: Node, Express, Mongodb, Mongoose, Sequelize.",
      ],
      // link_deploy: "https://appmundomarket.vercel.app/",
      link_deploy: "https://github.com/leonelborgesdev/mundomarket",
      images: [
        "https://github.com/leonelborgesdev/leonelborgesdev/assets/95236206/5f5a1768-c207-4e4f-b304-3108a8112ec4",
      ],
    },
    {
      id: "4",
      color: "purple",
      title: "COUNTRIES",
      detail:
        "Desarrollo de un SPA ( Single Page Application) encargada de crear, eliminar, listar, ordenar y filtrar la información de diferentes paises. Dicha información se obtiene desde una API ( Restcountries ) y de una Base de Datos Local",
      description: [
        "Frontend: React, Redux, JavaScript, CSS(PURO).",
        "Backend: Node, Express, PostgreSql, Sequelize.",
      ],
      // link_deploy: "https://leonelcountries.vercel.app",
      link_deploy: "https://github.com/leonelborgesdev/PI-Countries",
      images: [
        "https://github.com/leonelborgesdev/CarruselImagenesInfinitoEjemplo/assets/95236206/7ea05a24-6707-4633-8533-73eb52e31287",
        "https://github.com/leonelborgesdev/CarruselImagenesInfinitoEjemplo/assets/95236206/a17b7043-9f09-4a80-adeb-14a859a3ec91",
        "https://github.com/leonelborgesdev/CarruselImagenesInfinitoEjemplo/assets/95236206/0484539f-c7e4-4c62-ac96-ed244ea18352",
        "https://github.com/leonelborgesdev/CarruselImagenesInfinitoEjemplo/assets/95236206/300aa2b1-7048-446a-96b5-b47b9fe70d2e",
        "https://github.com/leonelborgesdev/CarruselImagenesInfinitoEjemplo/assets/95236206/fcf33e98-54be-44a7-b6a8-acc98f4186c8",
        "https://github.com/leonelborgesdev/CarruselImagenesInfinitoEjemplo/assets/95236206/1304ee19-063d-4056-a6b7-6a8bd3a47051",
        "https://github.com/leonelborgesdev/CarruselImagenesInfinitoEjemplo/assets/95236206/d59b3698-6c85-400e-b62f-52512faede51",
        "https://github.com/leonelborgesdev/CarruselImagenesInfinitoEjemplo/assets/95236206/5386143d-3991-412f-9cfd-bdad85482938",
      ],
    },
    {
      id: "5",
      color: "red",
      title: "POKEAPP",
      detail:
        "Desarrollo de un SPA ( Single Page Application) encargada de crear, eliminar, listar, ordenar y filtrar la información de diferentes pokemons. Dicha información se obtiene desde una API ( PokeApi ) y de una Base de Datos Local",
      description: [
        "Frontend: React, Redux, JavaScript, CSS(PURO).",
        "Backend: Node, Express, PostgreSql, Sequelize.",
      ],
      link_deploy: "https://github.com/leonelborgesdev/Pi_Pokemons",
      images: [
        "https://github.com/leonelborgesdev/portfolio/assets/95236206/73c13f5f-8e7e-4850-9210-e47a10586751",
        "https://github.com/leonelborgesdev/portfolio/assets/95236206/937913e1-5f72-4d4b-8d95-c6a2da113c1d",
        "https://github.com/leonelborgesdev/portfolio/assets/95236206/76cf6f33-4fe4-4c8a-a295-31deb2def93e",
        "https://github.com/leonelborgesdev/portfolio/assets/95236206/1af60af2-484e-43d1-9d7f-05d605d5afa1",
        "https://github.com/leonelborgesdev/portfolio/assets/95236206/1514ab43-771e-4621-b18e-5c52f302a87a",
        "https://github.com/leonelborgesdev/portfolio/assets/95236206/739eefc4-de43-41f5-a33f-941376c1232a",
        "https://github.com/leonelborgesdev/portfolio/assets/95236206/a2535773-8563-4a96-ae91-bfd0b0975869",
      ],
    },
  ],
  about_me2: [
    "Hi !!!😃",
    "My name is Leonel Borges, I am a web developer, I live in the city of Bermejo, Tarija Bolivia, my hobbies are volleyball, swimming and sports. I am a Henry Full Stack Developer Graduate, with skills in Backend and Frontend. I like programming, I like to learn more every day and I try to improve my skills by studying, practicing and participating in technology projects.",
    "Strengths: I am persevering, if there is something I don't know, I do everything possible to find the solution, I investigate the subject, I consult with my teammates, I accept advice, opinions and criticism with the idea of improving and finding the best possible solution. I work as a team, I help my colleagues if they need it so that the whole team can meet its objectives.",
    "Experience: For now my experience is purely academic, participating in individual and group projects such as the projects in Henry and others, I have also been a teaching assistant at the UAJMS, helping the boys with their practices, homework and preparing them for their exams. Java programming.",
  ],
  acerca_de_mi: [
    "Hola !!!😃",
    "Me llamo Leonel Borges, soy desarrollador web, vivo en la ciudad de Bermejo, de Tarija Bolivia, mis hobbies son el voley, la natacion y los deportes. Soy Graduado Full Stack Developer, con aptitudes en Backend y Frontend. Me gusta programar, me gusta aprender, y dia a dia mejorar mis habilidades estudiando, practicando y participando en proyectos de tecnologia.",
    "Fortalezas: El trabajo en equipo se me da muy bien, me adapto facilmente a los cambios, soy participativo, consulto y también doy asesoría a mis compañeros de equipo, si hay algo que no se, lo investigo y me esfuerzo mucho por encontrar la respuesta.",
    "Experiencia: Por ahora mi experiencia es netamente academica, participando en proyectos individuales y grupales, como ser los proyectos en bootcamp en henry y otros, tambien he sido ayudante de catedra en la UAJMS, ayudando a los chicos con sus practicos, tareas y preparandolos para sus examenes de programacion en Java.",
  ],
  menu_footer: [
    { id: "inicio", name: "Inicio" },
    { id: "about", name: "Acerca de mi" },
    { id: "proyectos", name: "Proyectos" },
    { id: "habilidadesTecnicas", name: "Habilidades Tecnicas" },
    { id: "habilidadesBlandas", name: "Habilidades Blandas" },
    { id: "contactame", name: "Contactame" },
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
    case CHANGE_LANGUAGE: {
      return {
        ...state,
        language: action.payload,
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
