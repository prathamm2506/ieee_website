import React from 'react';
import EventDescription from '../../components/Event_description/EventDescription';
import cryptoChromeImage from '../../assets/event.webp';
import { useNavigate } from 'react-router-dom';

const CryptoChrome = () => {
  const navigate = useNavigate();
  return (
    <div className='mt-16'>
      <button 
        onClick={() => navigate(-1)} 
        className="ml-4 mb-4 mt-5 px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition duration-200"
      >
        ←</button>
      <EventDescription 
        title="CryptoChrome Workshop"
        subtitle="Exploring Chrome Extension Development & Crypto Integration"
        date="13th August 2024"
        image={cryptoChromeImage}
        description="The CryptoChrome workshop provided students with a hands-on experience in Chrome extension development, API integration, and cryptocurrency applications. Designed to introduce participants to browser extension development, the workshop equipped them with the skills needed to create their own extensions while understanding how APIs enhance web applications.

        The session covered the fundamentals of Chrome API, demonstrating how extensions interact with websites to extend browser functionality. Participants followed a step-by-step guide to build a simple Chrome extension, incorporating interactive features using Python to create dynamic tools.

        By the end of the session, most participants had a fully functional extension showcasing their technical skills and the ability to integrate crypto features into real-world applications. In addition to technical learning, the workshop fostered collaboration, allowing students to engage with mentors, solve challenges together, and expand their professional network. It was an insightful experience that encouraged innovation and problem-solving in the ever-evolving tech landscape."
      />
    </div>
  );
};

export default CryptoChrome;
