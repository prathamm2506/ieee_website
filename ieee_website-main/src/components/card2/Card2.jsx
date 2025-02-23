import React from "react";
import "./Card2.css";

export default function Card2(props) {
  return (
    <div className="provideCard" style={{ background: props.bg }}>
      <img src={props.img} alt="technical resources" className="cardImg" />
      <h3 className="cardTitle">{props.title}</h3>
      <p className="cardContent">{props.content}</p>
    </div>
  );
}