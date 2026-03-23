import React from "react";
import Card from "../card2/Card2";
import { HiBookOpen, HiUserGroup, HiAcademicCap, HiBadgeCheck } from "react-icons/hi";
import "./Provide.css";

const Provide = () => {
  return (
    <section className="provide-main-wrapper">
      <h2 className="provide-title-text">What we Provide?</h2>
      <div className="provide-grid-container">
        <Card
          title="Technical Resources"
          icon={<HiBookOpen size={90} className="provide-svg-icon" />}
          bg="linear-gradient(135deg, #bae6fd 0%, #7dd3fc 100%)"
          content="A vast collection of research papers and journals. Attend workshops, seminars, and global IEEE conferences."
        />

        <Card
          title="Networking Opportunities"
          icon={<HiUserGroup size={90} className="provide-svg-icon" />}
          bg="linear-gradient(135deg, #bbf7d0 0%, #86efac 100%)"
          content="Connect with industry professionals and peers. Collaborate on projects with IEEE members worldwide."
        />

        <Card
          title="Skill Development"
          icon={<HiAcademicCap size={90} className="provide-svg-icon" />}
          bg="linear-gradient(135deg, #e9d5ff 0%, #d8b4fe 100%)"
          content="Leadership, communication, and teamwork workshops. Resume-building sessions and career counseling."
        />

        <Card
          title="Recognition & Certification"
          icon={<HiBadgeCheck size={90} className="provide-svg-icon" />}
          bg="linear-gradient(135deg, #fbcfe8 0%, #f9a8d4 100%)"
          content="For attending events and completing workshops. Recognition for excellence through various IEEE programs."
        />
      </div>
    </section>
  );
};

export default Provide;