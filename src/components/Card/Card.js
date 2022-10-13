import React from "react";
import style from "./style";

const Card = (props) => {
  const { title, body } = props;

  const image = "https://picsum.photos/200/300";

  return (
    <div style={style.card}>
      <div style={style.cardLogo}>
        <img src={image} width="100" />
      </div>
      <div style={style.cardContent}>
        <h1>Titulo</h1>
        <p>Descripcion</p>
      </div>
    </div>
  );
};

export default Card;
