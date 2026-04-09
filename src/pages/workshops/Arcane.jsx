import React from 'react';
import EventDescription from '../../components/Event_description/EventDescription';
import arcaneImage from '../../assets/arcaneImage.png';
import { useNavigate } from 'react-router-dom';
import Image01 from '../../assets/arc01.png';
import Image02 from '../../assets/arc02.png';
import Image03 from '../../assets/arc03.png';
import Image04 from '../../assets/arc04.png';
import Image077 from '../../assets/arc05.jpg';
import Image066 from '../../assets/arc06.jpg';

const Arcane = () => {
  const navigate = useNavigate();
  return (
    <div className='mt-16'>
      <button 
        onClick={() => navigate(-1)} 
        className="ml-4 mb-4 mt-5 px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition duration-200"
      >
        ←</button>
      <EventDescription 
        title="Arcane"
        subtitle="24 Hours of Online Hackathon"
        date="Date:- 3rd and 4th January 2026"
        image={arcaneImage}
        description="In this event, participants took part in a 24-hour hackathon focused on building innovative solutions in domains such as Healthcare, Education, and Sustainability. The session encouraged hands-on development, where teams worked on prototypes under the guidance of mentors. Their projects were evaluated by international experts. It was conducted on 3rd–4th January 2026.
        
        Mentors: Ms. Sneha Sumbe (Software Engineer @Equifax ), Mr. Jatin Geogia (Software Engineer @Barclays),  Mr. Mohit Singh Adhikari (Data Scientist II Maps, Location Intelligence & AI HERE Technologies)
Judges: Ms. Madhumita Menon (ECI System Engineer at Jaguar Land Rover (UK)), Mr. Shashank Aghnihotri (PhD Candidate, Chair for Machine Learning, University of Mannheim)"
galleryImages={[Image01, Image02, Image03, Image04, Image077, Image066]} 
      />
    </div>
  );
};

export default Arcane;
