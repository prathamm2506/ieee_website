import React from 'react';
import EventDescription from '../../components/Event_description/EventDescription';
import melangeImage from '../../assets/sympo2.jpg.jpeg';
import { useNavigate } from 'react-router-dom';

// import Image01 from '../../assets/melange01.jpg';
// import Image02 from '../../assets/melange02.jpg';
// import Image03 from '../../assets/melange03.jpg';
// import Image04 from '../../assets/melange04.jpg';
// import Image05 from '../../assets/melange05.jpg';
// import Image06 from '../../assets/melange06.jpg';

const Melange = () => {
  const navigate = useNavigate();

  return (
    <div className='mt-16'>
      <button 
        onClick={() => navigate(-1)} 
        className="ml-4 mb-4 mt-5 px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition duration-200"
      >
        ←
      </button>

      <EventDescription 
        title="Melange 2026"
        subtitle="Where Creativity Meets Celebration"
        date="Date:- 10th April 2026"
        image={melangeImage}
        description="Melange 2026 is the grand sign-off event of IEEE-VESIT, marking the culmination of a year filled with innovation, learning, and collaboration. Designed as a vibrant blend of technical excellence and cultural celebration, the event brings together students, organizers, and participants to reflect on achievements and create lasting memories. The evening will feature exciting segments including award ceremonies, fun interactive activities, performances, and recognition of outstanding contributions throughout the year. Melange serves as a platform to celebrate teamwork, creativity, and the spirit of IEEE, while also strengthening the community bond. With an engaging atmosphere and unforgettable experiences, the event promises to be a perfect farewell to the academic year, leaving everyone inspired and motivated for the journey ahead."
        
        // galleryImages={[
        //   Image01,
        //   Image02,
        //   Image03,
        //   Image04,
        //   Image05,
        //   Image06
        // ]} 
      />
    </div>
  );
};

export default Melange;