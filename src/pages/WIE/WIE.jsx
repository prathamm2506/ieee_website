import React from "react";
import Card from "../../components/Card/Card";
import "./WIE.css";

import logo from "../../assets/Golden_Logo.webp";
import anshi from "../../assets/TEs/Anshi.webp";
import vedika from "../../assets/BE25/Vedika.webp";

const Wie = () => {
  const wieInfo = [
    {
      title: "Our Mission",
      description:
        "Empowering women in engineering through networking, mentorship, and professional development opportunities to foster diversity and innovation in STEM fields.",
    },
    {
      title: "What We Do",
      description:
        "Organize workshops, seminars, and networking events to support women engineers at all stages of their careers and promote gender equality in technology.",
    },
  ];

  return (
    <div className="wie-page">
      {/* Hero Section */}
      <section className="wie-hero">
        <div className="hero-container">
          <div className="hero-left">
            <h1 className="hero-title">Women in Engineering</h1>
            <h2 className="hero-subtitle">IEEE-VESIT's WIE</h2>
            <p className="hero-desc">
              Empowering women engineers to innovate and lead in STEM fields
              through professional development and community building.
            </p>
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
            <img src={logo} alt="IEEE WIE Logo" className="floating-logo" />
          </div>
        </div>

        {/* Animated Scroll Arrow */}
        <a href="#team-section" className="scroll-down-arrow">
          <span>Explore</span>
          <div className="arrow-icon"></div>
        </a>
      </section>

      {/* Team Section */}
      <section className="wie-team" id="team-section">
        <div className="team-container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-cards">
            <Card
              name="Anshi Tiwari"
              role="Women in Engineering"
              image={anshi}
              email="2022.anshi.tiwari@ves.ac.in"
              github="https://github.com/anshi1108"
              linkedin="https://www.linkedin.com/in/anshi-tiwari-b4a6642a7/"
            />
            <Card
              name="Vedika Parab"
              role="Jr. Women In Engineering"
              image={vedika}
              email="2023.vedika.parab@ves.ac.in"
              github="https://github.com/VedikaParab"
              linkedin="http://linkedin.com/in/vedika-parab"
            />
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="wie-info">
        <div className="info-container">
          <div className="info-heading">
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

      {/* Final Content Section */}
      <section className="wie-content">
        <div className="content-container">
          <p className="final-text">
            IEEE Women in Engineering (WIE) is one of the largest international
            professional organizations dedicated to promoting women engineers
            and scientists and inspiring girls around the world to follow their
            academic interests in a career in engineering.
          </p>
          <p className="final-text">
            At IEEE-VESIT, our WIE affinity group works to foster a supportive
            environment for women in STEM through technical workshops,
            leadership training, and networking opportunities with industry
            professionals.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Wie;