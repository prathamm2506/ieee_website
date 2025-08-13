import React from 'react';
import EventDescription from '../../components/Event_description/EventDescription.jsx';
import uiuxImage from '../../assets/uiux25.png';
import { useNavigate } from 'react-router-dom';

const UIUXWorkshop = () => {
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
        title="UI/UX Workshop"
        subtitle="Hands-on Figma Design & Prototyping"
        date="31st July and 1st August, 2025"
        image={uiuxImage}
        description={`IEEE-VESIT conducted a two-day offline UI/UX workshop aimed at equipping students with the fundamentals of user interface and user experience design through Figma. Led by Anushka Sharma, Vedika Parab, Harsh Patil, and Sudarsana Krishnan, the sessions blended theory, creative thinking, and interactive design exercises.

Day 1 began with an introduction to UI and UX concepts, including the difference between the two, their role in app design, and the principles of user-centric thinking. Participants were introduced to Figma’s interface, learning design principles such as consistency, visual hierarchy, spacing, simplicity, and readability. They explored components, assets, layers, auto layout, and prototyping features before moving into practical work — creating wireframes, applying color schemes, and designing a splash screen with an animated mesh gradient, along with a basic home page and profile page layout.

Day 2 focused on completing the app prototype with engaging animations and interactivity. Participants implemented light/dark mode with liquid glass effects, built an animated mood tracker using rotating pills UI, created an infinite-scroll community feed, and designed a relaxation page with animated audio waveforms. The workshop concluded with Q&A and feedback, leaving students with a polished, interactive prototype and a solid foundation in UI/UX design.

Through this workshop, IEEE-VESIT provided a practical, industry-relevant design learning experience, bridging the gap between conceptual design thinking and real-world app prototyping.`}
      />
    </div>
  );
};

export default UIUXWorkshop;
