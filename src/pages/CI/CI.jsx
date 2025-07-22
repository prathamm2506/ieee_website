import React from "react";
import "./CI.css";
import cieeeLogo from "../../assets/ieee_ci.webp"; // Keeping only this local image

const ComputationalIntelligence = () => {
  const features = [
    {
      icon: "📊",
      title: "Cutting-Edge Research",
      description: "Access to the latest advancements in neural networks, fuzzy systems, evolutionary computation, and machine learning."
    },
    {
      icon: "🌐",
      title: "Global Network",
      description: "Connect with thousands of researchers and practitioners worldwide through conferences and local chapters."
    },
    {
      icon: "📚",
      title: "Premium Publications",
      description: "Get exclusive access to IEEE Transactions on Neural Networks and Learning Systems and other key publications."
    }
  ];

  const resources = [
    {
      title: "IEEE CIS Website",
      link: "https://cis.ieee.org/",
      description: "Official portal with society news, events, and resources"
    },
    {
      title: "IEEE Xplore Digital Library",
      link: "https://ieeexplore.ieee.org/",
      description: "Access thousands of technical papers and publications"
    },
    {
      title: "Upcoming Conferences",
      link: "https://cis.ieee.org/conferences",
      description: "Information about IJCNN, FUZZ-IEEE, and other major events"
    }
  ];

  // External image URLs
  const imageUrls = {
    conference: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    publication: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1373&q=80",
    network: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
  };

  return (
    <div className="ci-page">
      {/* Hero Section */}
      <section className="ci-hero">
        <div className="hero-content">
          <div className="hero-text mt-12">
            <h1>IEEE Computational Intelligence Society</h1>
            <p className="subtitle">
              Advancing the theory, algorithms, and applications of computational intelligence worldwide
            </p>
            <a
              href="https://cis.ieee.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button secondary"
            >
              Visit Official Website
            </a>
          </div>
          <div className="hero-image">
            <img src={cieeeLogo} alt="IEEE CIS Logo" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About the Society</h2>
        <div className="about-content">
          <p>
            The IEEE Computational Intelligence Society (CIS) is a professional society of the IEEE focusing on "the theory, design, application, and development of biologically and linguistically motivated computational paradigms."
          </p>
          <p>
            While we don't currently have a local chapter at our institution, students and faculty can still benefit from CIS membership and resources.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Engage with IEEE CIS?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Activities Section */}
      <section className="activities-section">
        <h2>Key Activities</h2>
        <div className="activity-cards">
          <div className="activity-card">
            <img src={imageUrls.conference} alt="Conferences" />
            <div className="activity-content">
              <h3>Conferences</h3>
              <p>
                Participate in world-class conferences like the International Joint Conference on Neural Networks (IJCNN) and the IEEE Conference on Computational Intelligence in Games.
              </p>
            </div>
          </div>
          <div className="activity-card reverse">
            <img src={imageUrls.publication} alt="Publications" />
            <div className="activity-content">
              <h3>Publications</h3>
              <p>
                Access leading journals including IEEE Transactions on Neural Networks and Learning Systems and IEEE Computational Intelligence Magazine.
              </p>
            </div>
          </div>
          <div className="activity-card">
            <img src={imageUrls.network} alt="Networking" />
            <div className="activity-content">
              <h3>Networking</h3>
              <p>
                Connect with professionals through technical committees, webinars, and local chapter events worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="resources-section">
        <h2>Get Involved</h2>
        <div className="resources-list">
          {resources.map((resource, index) => (
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-card"
              key={index}
            >
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <span className="link-arrow">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* Membership CTA */}
      <section className="membership-cta">
        <h2>Interested in Computational Intelligence?</h2>
        <p>
          Consider joining IEEE and the Computational Intelligence Society to access exclusive resources, networking opportunities, and professional development.
        </p>
        <div className="cta-buttons">
          <a
            href="https://cis.ieee.org/membership"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button secondary"
          >
            Learn About CIS Membership
          </a>
        </div>
      </section>
    </div>
  );
};

export default ComputationalIntelligence;