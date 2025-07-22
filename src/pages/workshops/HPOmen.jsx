import React from 'react';
import EventDescription from '../../components/Event_description/EventDescription';
import eventImage from '../../assets/event.webp';
import { useNavigate } from 'react-router-dom';

const HpOmen = () => {
  const navigate = useNavigate();
  return (
    <div className='mt-16'>
      <button 
        onClick={() => navigate(-1)} 
        className="ml-4 mb-4 mt-5 px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition duration-200"
      >
        ←</button>
      <EventDescription 
        title="HP OMEN Workshop"
        subtitle="IEEE-VESIT x HP Omen Special Event"
        date="12th - 13th September 2024"
        image={eventImage}
        description="IEEE-VESIT, in collaboration with HP Omen, hosted an engaging two-day workshop on September 12th and 13th in Room B22. The event blended hands-on learning and gaming, drawing in tech enthusiasts. Participants learned about PC building with CPUs, GPUs, and motherboards, followed by an exploration of HP Omen laptops for gaming and development. The event concluded with a high-energy Valorant tournament with a ₹1.5K+ prize pool, providing both a learning experience and an opportunity for competitive fun."
      />
    </div>
  );
};

export default HpOmen;
