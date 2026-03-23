import React from "react";
import "./Testimonials.css";

import juhi from "../../assets/juhi.webp";
import mansi from "../../assets/mansi.webp";
import tamanna from "../../assets/tamanna.webp";
import madhumita from "../../assets/madhumita.webp";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Juhi Chhatlani",
      branch: "CMPN (2019 - 2023)",
      image: juhi,
      text: "Being a member of IEEE Vesit was amazing. I have gained experience with the technical workshop conducted by the council. International membership of IEEE has helped me in publishing my research paper.",
    },
    {
      name: "Mansi Kasar",
      branch: "EXTC (2018 - 2022)",
      image: mansi,
      text: "IEEE has no doubt been an important factor in my growth. Since all the workshops conducted had given me insights and hands-on experience into various technology that help me to learn new things.",
    },
    {
      name: "Tamanna Rupani",
      branch: "CMPN (2013 - 2017)",
      image: tamanna,
      text: "Being a part of IEEE VESIT was a transformative journey. From a junior operations officer to Chairperson (2016-17), I gained invaluable leadership experience, teamwork skills, and industry exposure.",
    },
    {
      name: "Madhumita Menon",
      branch: "EXTC (2018 - 2022)",
      image: madhumita,
      text: "I have been a part of the IEEE-VESIT family for 3 years and I am not exaggerating one bit when I say that choosing to get into this council was the best decision at the time.",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-heading">Testimonials</h2>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div key={index} className={`testimonial-card card-bg-${index % 4}`}>
              <div className="testimonial-header">
                <div className="image-wrapper">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="testimonial-image"
                  />
                </div>
                <h3 className="testimonial-name">{item.name}</h3>
                <span className="testimonial-branch">{item.branch}</span>
              </div>

              <div className="testimonial-body">
                <span className="quote-mark">“</span>
                <p className="testimonial-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;