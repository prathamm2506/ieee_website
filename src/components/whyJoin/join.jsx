import React from "react";
import "./join.css";

const Join = () => {
  return (
    <div className="joinUs">
      {/* <div className="title-container">
        <p className="Header">Why join IEEE-VESIT?</p>
        <p className="subHeading">Unlock a world of opportunities by becoming a member of IEEE VESIT!</p>
    </div> */}
      <div className="event-card-container">
        <div className="event-card card1">
          <div className="event-icon">
            <i class="fa-solid fa-ticket text-5xl"></i>
          </div>
          <div className="event-text">
            <p className="event-title">Free Event Access:</p>
            <p className="event-description">
              Attend seminars and fun events at no cost.
            </p>
          </div>
        </div>

        <div className="event-card card2">
          <div className="event-icon">
            <i class="fa-solid fa-earth-americas text-5xl"></i>
          </div>
          <div className="event-text">
            <p className="event-title">Global Network:</p>
            <p className="event-description">
              Connect with the international IEEE community.
            </p>
          </div>
        </div>

        <div className="event-card card3">
          <div className="event-icon">
            <i class="fa-solid fa-user-graduate text-5xl"></i>
          </div>
          <div className="event-text">
            <p className="event-title">Endorsed Certificates: </p>
            <p className="event-description">
              Worldwide-valid IEEE certificates.
            </p>
          </div>
        </div>

        <div className="event-card card4">
          <div className="event-icon">
            <i class="fa-regular fa-handshake text-5xl"></i>
          </div>
          <div className="event-text">
            <p className="event-title">Collaboration: </p>
            <p className="event-description">
              Network and exchange ideas via IEEE Collaboratec.
            </p>
          </div>
        </div>

        <div className="event-card card5">
          <div className="event-icon">
            <i class="fa-solid fa-gears text-5xl"></i>
          </div>
          <div className="event-text">
            <p className="event-title">Free Workshops:</p>
            <p className="event-description">
              Access hardware and software workshops for free.
            </p>
          </div>
        </div>

        <div className="event-card card6">
          <div className="event-icon">
            <i class="fa-solid fa-file-pen text-5xl"></i>
          </div>
          <div className="event-text">
            <p className="event-title">Publishing Discounts: </p>
            <p className="event-description">
              {" "}
              Save on publishing in IEEE journals with International Membership
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
