import React from "react";
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <div className="about">
      {/* <div className="one">About Us</div> */}

      <div className="h1">
        Vivekanand Education Society's Institute of Technology
      </div>

      <div className="para1">
        <div className="p1">
          Vivekanand Education Society’s Institute of Technology (VESIT) was
          established in 1984, with the aim of providing professional education
          in the field of Engineering. This institute is affiliated to the
          University of Mumbai and follows the rules and regulations laid down
          by government, AICTE, and University for admission; 51% reserved for
          Sindhi Linguistic minority and 49% through CAP test. The management
          quota has been surrendered to DTE to make admission centralized.
        </div>

        <div className="pic1">
          <img src="src\assets\veslogo.jpeg" />
        </div>
      </div>

      <div className="h2">IEEE International</div>

      <div className="para2">
        <div className="pic2">
          <img src="src\assets\advancing tech.png" />
        </div>

        <div className="p2">
          The Institute of Electrical and Electronics Engineers (IEEE) is a
          professional association for electronic engineering and electrical
          engineering (and associated disciplines) with its corporate office in
          New York City and its operations center in Piscataway, New Jersey. The
          mission of the IEEE is advancing technology for the benefit of
          humanity. The IEEE was formed from the amalgamation of the American
          Institute of Electrical Engineers and the Institute of Radio Engineers
          in 1963.
        </div>
      </div>

      <div className="h3">IEEE VESIT</div>

      <div className="para3">
        <div className="p3">
          IEEE stands for Institute of Electrical and Electronics Engineers.
          Here at IEEE-VESIT, we conduct many technical workshops as well as fun
          events and seminars, maintaining the balance between academics and
          co-curricular activities. Being the perfect blend of hardware and
          software, IEEE-VESIT covers a huge cloud of domains in which students
          can build their career. The faculty and student council works
          hand-in-hand and the legacy is carried forward. IEEE-VESIT also boasts
          about international membership which allows students to get guidance
          right from selecting the topic to write a research paper on until the
          paper is published in the international IEEE magazines. IEEE-VESIT is
          one umbrella society that you require in your engineering life! Be it
          workshops, seminars, fun events, placements, masters, technical paper
          presentations, etc, IEEE-VESIT has it all!
        </div>
        <div className="pic3">
          <img src="src\assets\logo.png" />
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
