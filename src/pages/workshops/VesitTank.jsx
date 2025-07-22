import React from 'react';
import EventDescription from '../../components/Event_description/EventDescription';
import eventImage from '../../assets/event.webp';
import { useNavigate } from 'react-router-dom';

const VesitTank = () => {
  const navigate = useNavigate();
  return (
    <div className='mt-16'>
      <button 
        onClick={() => navigate(-1)} 
        className="ml-4 mb-4 mt-5 px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition duration-200"
      >
        ←</button>
      <EventDescription 
        title="VESIT Tank"
        subtitle="Women in Engineering Post-Praxis event"
        date="8th March 2023"
        image={eventImage}
        description="VESIT-Tank was designed to ignite entrepreneurial passion among students by providing hands-on experience in pitching and refining business ideas. The event encouraged collaboration, mentorship, and personal growth while helping participants tackle real-world business challenges.

Students presented their ideas to a panel of industry experts, receiving valuable feedback to enhance their concepts. This interactive session provided practical insights into market understanding and business viability.

The event helped participants develop key entrepreneurial skills such as idea presentation, communication, and critical thinking, making it a transformative experience."
      />
    </div>
  );
};

export default VesitTank;
