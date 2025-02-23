import React from "react";
import Card from "../card2/Card2";
import resource from "../../assets/techincalResources.jpeg";
import network from "../../assets/network.jpeg";
import skill from "../../assets/skill.jpeg";
import certi from "../../assets/certi.jpeg";

import "./Provide.css";

export default function Provide() {
  return (
    <div className="provide">
      <h3 className="provideTitle">What we Provide ?</h3>
      <div className="provideContainer">
        <Card
          title={
            <>
              <span>Technical</span>
              <br />
              Resources
            </>
          }
          img={resource}
          bg="linear-gradient(rgba(13, 125, 255, 1), rgba(86, 204, 242, 0.54))"
          content="A vast collection of research papers, journals, and technical standards in engineering and technology. Opportunities to attend technical events, including workshops, seminars, and global IEEE conferences."
        />

        <Card
          title={
            <>
              <span>Networking</span>
              <br />
              Opportunities
            </>
          }
          img={network}
          bg="linear-gradient(rgba(93, 214, 168, 1), rgba(123, 225, 192, 0.47))"
          content="Connect with industry professionals, researchers, and peers through IEEE chapters and events. Opportunities to collaborate on projects with other IEEE members worldwide."
        />

        <Card
          title={
            <>
              <span>Skill</span>
              <br />
              Development
            </>
          }
          img={skill}
          bg="linear-gradient(rgba(99, 70, 240, 0.96), rgba(131, 107, 246, 0.8))"
          content="Leadership, communication, teamwork, and project management workshops. Resume-building sessions, mock interviews, and career counseling. Take leadership positions in local IEEE chapters or councils."
        />

        <Card
          title={
            <>
              <span>Recognition &</span>
              <br />
              Certification
            </>
          }
          img={certi}
          bg="linear-gradient(rgba(231, 97, 158, 1), rgba(253, 164, 128, 0.87))"
          content="For attending events, completing workshops, and contributing to projects. Recognition for academic excellence, research, and innovation through various IEEE programs."
        />
      </div>
    </div>
  );
}
