import React from "react";
import "./Card.css";

const Card = ({ name, role, image, instagram, linkedin, github, email }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <div className="hover-box">
          <div className="text-box">
            <h3 className="name">{name}</h3>
            <p className="role">{role}</p>
          </div>
          <div className="icons-box">
            {instagram && (
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
