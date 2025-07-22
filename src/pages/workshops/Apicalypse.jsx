import React from 'react';
import { useNavigate } from 'react-router-dom';
import EventDescription from '../../components/Event_description/EventDescription';
import apicalypseImage from '../../assets/Apicalypse.webp';

const APIcalypse = () => {
  const navigate = useNavigate();

  return (
    <div className='mt-16'>
      <button 
        onClick={() => navigate(-1)} 
        className="ml-4 mb-4 mt-5 px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition duration-200"
      >
        ←</button>
      <EventDescription 
        title="APIcalypse"
        subtitle="Mastering API Development & Security"
        date="January 8-9, 2025"
        image={apicalypseImage}
        description="The IEEE-VESIT API Workshop provided an in-depth exploration of API development, security, and best practices. Participants gained hands-on experience with RESTful APIs, authentication methods (OAuth, JWT), and security techniques.

The interactive sessions included building and testing APIs using Postman, Flask/FastAPI, and Node.js. Industry experts shared insights on API performance optimization and real-world applications.

With a well-paced and engaging format, the workshop equipped students with practical skills to build, secure, and optimize APIs for scalable applications, ensuring they are industry-ready."
      />
    </div>
  );
};

export default APIcalypse;
