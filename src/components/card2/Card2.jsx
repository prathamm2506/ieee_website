import React from "react";
import "./Card2.css";

export default function Card2(props) {
  return (
    <div className="provideCard" style={{ background: props.bg }}>
      {props.icon ? (
        <div className="cardIconWrapper">{props.icon}</div>
      ) : (
        <img src={props.img} alt={props.title} className="cardImg" />
      )}
      <h3 className="cardTitle">{props.title}</h3>
      <p className="cardContent">{props.content}</p>
    </div>
  );
}