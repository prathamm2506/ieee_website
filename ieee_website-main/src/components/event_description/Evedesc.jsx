import React from "react";
import "./Evedesc.css";
import img1 from '../../assets/event.png'

const Evedesc = () => {
  return (
    <div className="event">
      <div className="heads">
        <h1 className="heada uppercase">VESIT Tank</h1>

        <h1 className="headb">Women in Engineering Post-Praxis event</h1>

        <h1 className="headc">Date: 8th March 2023</h1>
      </div>

      <img src={img1} className="img px-4" />

      <p className="para1 xl:w-4/5 mx-auto px-4">
        On March 8th, 2023, from 1:00 PM onwards, the entrepreneurial spirit of
        VESIT ignited with the inaugural edition of VESIT-Tank.
      </p>

      <div className="xl:w-4/5 px-4">
            <p className="para1">
              VESIT-Tank was introduced to ignite entrepreneurial passion among
              students while providing them with practical experience in
              pitching and developing business ideas. It aimed to cultivate
              collaboration, mentorship, and personal growth while helping
              students refine their ideas and understand the intricacies of
              real-world business challenges.
            </p>

            <p className="para1">
              The event offered students a chance to engage in an exciting and
              competitive environment. Participants were required to present
              their business concepts to a panel of mentors and industry
              experts. Each presentation was followed by a detailed feedback
              session, where students received guidance on how to improve their
              ideas and make them more viable. The interaction with mentors was
              a key highlight, as it provided practical insights into the
              nuances of the business world.
            </p>

            <p className="para1">
              The VESIT-Tank event had a profound impact on participants. It
              helped them develop critical entrepreneurial skills, such as idea
              presentation, market understanding, and effective communication.
              The feedback from industry experts served as a valuable resource
              for students to refine their ideas further.
            </p>
      </div>

      <button 
  className="w-max px-6 py-3 bg-[var(--color2)] mt-8 uppercase text-[var(--white)] transition-all duration-500 ease-in-out hover:bg-[var(--color1)] hover:text-[var(--black)]" 
  style={{ fontSize: 'var(--p)' }}
>
  Register Now
</button>

    </div>
  );
};

export default Evedesc;
