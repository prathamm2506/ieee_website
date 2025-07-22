import React from 'react';
import EventDescription from '../../components/Event_description/EventDescription';
import flutterWorkshopImage from '../../assets/Flutter.webp';
import { useNavigate } from 'react-router-dom';

const Flutter = () => {
  const navigate = useNavigate();
  return (
    <div className='mt-16'>
      <button 
        onClick={() => navigate(-1)} 
        className="ml-4 mb-4 mt-5 px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition duration-200"
      >
        ←</button>
      <EventDescription 
        title="Flutter Workshop"
        subtitle="Building AI-Powered Apps with Flutter"
        date="December 16-20, 2024"
        image={flutterWorkshopImage}
        description="IEEE-VESIT transformed classrooms into an innovation hub with its hands-on Flutter Workshop, equipping students with the skills to develop AI-driven, cloud-connected mobile apps. This two-day workshop provided a deep dive into Flutter’s powerful cross-platform capabilities.

        The first session introduced attendees to Flutter's hot-reload feature, widget trees, and state management patterns through live examples. Participants immediately applied their knowledge by building responsive UIs. 

        On day two, the focus shifted to real-world integrations, turning basic apps into intelligent applications with Gemini-powered AI features and Firebase as a backend. The workshop’s interactive code-along format ensured that every concept was reinforced through live implementation.

        The event had the energy of a hackathon, with students collaborating, adding new features, and solving coding challenges in real time. IEEE-VESIT's commitment to practical learning was evident, as theoretical concepts seamlessly transitioned into real-world applications. This immersive experience left participants not just with knowledge, but with fully functional applications, preparing them for industry demands and future innovations."
      />
    </div>
  );
};

export default Flutter;
