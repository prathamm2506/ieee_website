import React from 'react';
import EventDescription from '../../components/Event_description/EventDescription';
import pcbImage from '../../assets/pcb.png'; // change the image file name when you have the actual one
import { useNavigate } from 'react-router-dom';

const PCBWorkshop = () => {
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
        title="PCB DESIGN WORKSHOP"
        subtitle="Hands-on PCB Designing & Fabrication"
        date="17th and 18th july,2025"
        image={pcbImage}
         description={`IEEE-VESIT hosted a two-day PCB Designing Workshop, giving participants a complete introduction to circuit board design using KiCad while working on beginner hardware projects. 

        Day 1 began with Nafeesa Memon introducing PCB fundamentals — from why PCBs are preferred over breadboards to their applications in college projects, industry, and hackathons. Students explored KiCad’s interface, learned schematic creation, footprint assignment, and the basics of key components like resistors, capacitors, and diodes. The highlight was building a piano circuit schematic under the guidance of Nidhi, complete with footprint mapping, ERC checks, and preparation for layout.

        Day 2, led by Sudarsana Krishnan and Shaunak, transitioned into practical PCB layout design. Participants worked on two projects — a USB to UART Converter using CP2102 and a Buck Converter — learning routing strategies, high-current trace management, and feedback loop design. The session concluded with Gerber file generation and a final board preview.

        This workshop bridged the gap between theory and practice, providing attendees with the skills to go from schematic to production-ready PCB. The hands-on, project-based approach ensured students left with the confidence to design boards for real-world systems.`}
      />
    </div>
  );
};

export default PCBWorkshop;
