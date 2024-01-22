import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const Carrusel = () => {
  const { cards } = useSelector((state) => state);
  const { id } = useParams();
  const card = cards.filter((card) => card.id === id);
  return <div>{card[0].title}</div>;
};
