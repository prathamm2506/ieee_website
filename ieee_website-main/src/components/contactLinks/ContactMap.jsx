import React from 'react';
import "./ContactMap.css";

const ContactMap = () => {
  return (
    <div className="comp">
      <div className="cardx-container">
        <div className="cardx">
          <a href="https://www.instagram.com/ieee_vesit/" target="_blank" rel="noopener noreferrer">
            <img src="https://www.iconpacks.net/icons/2/free-instagram-logo-icon-3497-thumb.png" alt="Instagram Logo" className="icon" />
          </a>
          <a href="https://www.instagram.com/ieee_vesit/" target="_blank" rel="noopener noreferrer" className="username-link">
            <p className="username">@ieee_vesit</p>
          </a>
        </div>

        <div className="cardx">
          <a href="https://www.linkedin.com/company/ieeevesit/" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/06/Linkedin_circle_black-512.png?20190209090242" alt="LinkedIn Logo" className="icon" />
          </a>
          <a href="https://www.linkedin.com/company/ieeevesit/" target="_blank" rel="noopener noreferrer" className="username-link">
            <p className="username">ieeevesit</p>
          </a>
        </div>

        <div className="cardx">
          <a href="mailto:ieee.vesit@ves.ac.in">
            <img src="https://static.vecteezy.com/system/resources/previews/020/009/598/non_2x/email-and-mail-icon-black-free-png.png" alt="IEEE Email" className="icon" />
          </a>
          <a href="mailto:ieee.vesit@ves.ac.in" className="username-link">
            <p className="username">ieee.vesit@ves.ac.in</p>
          </a>
        </div>
      </div>

      <div className="map-container mt-8">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60342.73921384935!2d72.88889!3d19.04521!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8add9569a29%3A0xb7ad04bf9a389df7!2sVivekanand%20Education%20Society's%20Institute%20Of%20Technology%20(VESIT)!5e0!3m2!1sen!2sin!4v1737372837624!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="VESIT Location"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
