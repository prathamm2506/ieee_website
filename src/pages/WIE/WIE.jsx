import React from "react";
import Card from "../../components/Card/Card";
import "./WIE.css"; 

import logo from "../../assets/ieee_wie_purple_4c.webp";
import Reet from "../../assets/TEs/Reet.webp";
import img1 from "../../assets/test_img.webp";
import aditri from "../../assets/BEs/aditri.webp";

const Wie = () => {
  const wieInfo = [
    { 
      title: "Our Mission", 
      description: "Empowering women in engineering through networking, mentorship, and professional development opportunities to foster diversity and innovation in STEM fields."
    },
    { 
      title: "What We Do", 
      description: "Organize workshops, seminars, and networking events to support women engineers at all stages of their careers and promote gender equality in technology."
    }
  ];

  return (
    <div className="wie-page mt-5">
      {/* Hero Section */}
      <section className="wie-hero">
        <div className="hero-container">
          <div className="hero-left">
            <h1>Women in Engineering</h1>
            <h2>IEEE-VESIT's WIE</h2>
            <p>Empowering women engineers to innovate and lead in STEM fields through professional development and community building.</p>
            <a
              href="https://wie.ieee.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="wie-button"
            >
              Visit IEEE WIE Website
            </a>
          </div>
          <div className="hero-right">
            <img src={logo} alt="IEEE WIE Logo" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="wie-team">
        <div className="team-container">
          <h2>Meet Our Team</h2>
          <div className="team-cards">
            <Card
              name="Aditri Vishwas"
              role=" Women in Engineering"
              image={aditri}
              linkedin="https://www.linkedin.com/in/aditri-vishwas-382780280"
              github="https://github.com/aditri31"
              email="2021.aditri.vishwas@ves.ac.in"
            />
            <Card
              name="Reet Sharma"
              role="Jr. Women In Engineering"
              image={Reet}
              email="2022.reet.sharma@ves.ac.in"
            />
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="wie-info">
        <div className="info-container">
          <div className="info-heading flex justify-start items-center">
            <h2>About IEEE WIE</h2>
          </div>
          
          <div className="info-table">
            {wieInfo.map((item, index) => (
              <div className="info-item" key={index}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="wie-content">
        <div className="content-container">
          <p>
            IEEE Women in Engineering (WIE) is one of the largest international professional organizations dedicated to promoting women engineers and scientists and inspiring girls around the world to follow their academic interests in a career in engineering.
          </p>
          <p>
            At IEEE-VESIT, our WIE affinity group works to foster a supportive environment for women in STEM through technical workshops, leadership training, and networking opportunities with industry professionals.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Wie;