import React from "react";
import "./Aboutus.css";
import img1 from '../../assets/veslogo.webp'
import img2 from '../../assets/advancing_tech.webp'
import img3 from '../../assets/logo.webp'

const Aboutus = () => {
  return (
    <div className="about">
      {/* <div className="one">About Us</div> */}

      <div className="h1">
        Vivekanand Education Society's Institute of Technology
      </div>

      <div className="para1">
        <div className="p1">
          Vivekanand Education Society's Institute of Technology (VESIT) was
          established in 1984, with the aim of providing professional education
          in the field of Engineering. This institute is affiliated to the
          University of Mumbai and follows the rules and regulations laid down
          by government, AICTE, and University for admission; 51% reserved for
          Sindhi Linguistic minority and 49% through CAP test. The management
          quota has been surrendered to DTE to make admission centralized.
        </div>

        <div className="pic1">
          <img src={img1} />
        </div>
      </div>

      <div className="h2">IEEE International</div>

      <div className="para2">
        <div className="pic2">
          <img src={img2} />
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
        At IEEE-VESIT we aim at fostering both technical excellence and vibrant student engagement. From cutting-edge workshops and seminars to fun, enriching events, we ensure a perfect balance between academics and co-curriculars.
        Backed by international IEEE membership, students gain global exposure — from writing research papers to getting published. Whether it’s placements, higher studies, or hands-on learning, IEEE-VESIT is your one-stop society for it all.
        </div>
        <div className="pic3">
          <img src={img3} />
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
