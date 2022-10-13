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
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  );
};

Card.defaultProps = {
  title: "Un Titulo",
  body: "Una Descripcion",
};

export default Card;
