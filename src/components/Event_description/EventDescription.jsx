import React from "react";
import "./Event_description.css";

const EventDescription = ({ title, subtitle, date, image, description, linkform }) => {
  return (
    <div className="event">
      <div className="heads">
        <h1 className="heada uppercase">{title}</h1>
        <h1 className="headb">{subtitle}</h1>
        <h1 className="headc">Date: {date}</h1>
      </div>

      <img src={image} className="img px-4" alt="Event" />

      <p className="para1 xl:w-4/5 mx-auto px-4">{description}</p>

      <button 
        className="w-max px-6 py-3 bg-[var(--color2)] mt-8 uppercase text-[var(--white)] transition-all duration-500 ease-in-out hover:bg-[var(--color1)] hover:text-[var(--black)]" 
        style={{ fontSize: 'var(--p)' }} 
        onClick={() => window.open(linkform, '_blank')}
      >
        Register Here
      </button>

    </div>
  );
};

export default EventDescription;
