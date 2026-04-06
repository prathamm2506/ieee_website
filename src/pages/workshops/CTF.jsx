import React from 'react';
import EventDescription from '../../components/Event_description/EventDescription';
import ctfImage from '../../assets/ctfImage.png';
import { useNavigate } from 'react-router-dom';
import Image01 from '../../assets/ctf01.jpg';
import Image02 from '../../assets/ctf02.jpg';
import Image03 from '../../assets/ctf03.jpg';
import Image04 from '../../assets/ctf04.jpg';
import Image05 from '../../assets/ctf05.jpg';
import Image06 from '../../assets/ctf06.jpg';

const CTF = () => {
  const navigate = useNavigate();
  return (
    <div className='mt-16'>
      <button 
        onClick={() => navigate(-1)} 
        className="ml-4 mb-4 mt-5 px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition duration-200"
      >
        ←</button>
      <EventDescription 
        title="Caputure The Flag (CTF)"
        subtitle="Think Smart, Hack Smarter"
        date="Date:- 13th February 2026"
        image={ctfImage}
        description="In this event, participants engaged in IEEE-VESIT’s first-ever Cybersecurity-based Capture The Flag (CTF) experience, designed to blend learning with real-time problem-solving. The event began with an online workshop that equipped participants with essential cybersecurity skills, tools, and investigative techniques, followed by an offline CTF competition where teams applied their knowledge to solve layered challenges. The session emphasized hands-on exploration of concepts such as decoding encrypted data, uncovering hidden messages, and analyzing digital evidence, all within a fast-paced and competitive environment. The event was conducted with workshop sessions on 11th–12th February 2026 (online) and the final CTF competition on 13th February 2026 (offline). Sponsored by Ignite Room, Mumbai, the event provided participants with practical exposure, industry-relevant skills, and an opportunity to compete for exciting rewards while gaining valuable cybersecurity experience."
        galleryImages={[Image01, Image02, Image03, Image04, Image05, Image06]} 
      />
    </div>
  );
};

export default CTF;
