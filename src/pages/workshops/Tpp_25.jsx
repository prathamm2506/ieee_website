import React from 'react';
import EventDescription from '../../components/Event_description/EventDescription';
import tppImage from '../../assets/tpp_25.webp'; // change image file name when you have the actual one
import { useNavigate } from 'react-router-dom';

const TPPWorkshop = () => {
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
        title="TECHNICAL PAPER PRESENTATION (TPP) WORKSHOP"
        subtitle="Transforming Research into Recognition"
        date="21st and 22nd August 2025 | 2:30 PM onwards"
        image={tppImage}
        description={`IEEE-VESIT is proud to host the Technical Paper Presentation (TPP) Workshop, aimed at helping students transform their research into impactful publications and conference-ready papers. This workshop focuses on writing techniques, IEEE formatting, and structured documentation, ensuring students gain the skills to present their work at global platforms.

Day 2 will provide deeper insights into what makes a research paper worth publishing. Students will learn from award-winning researcher **Shashank Agnihotri**, PhD Candidate at the University of Mannheim, who has published in top-tier AI/ML conferences such as ICML, ECCV, TMLR, and NeurIPS. With expertise in deep learning, computer vision, and neural architecture search, he brings extensive international experience to the session.

The session will cover:
- Understanding key qualities of a publishable research paper
- Writing final year papers in complete IEEE format
- Applying structured documentation techniques
- Following global publishing standards to boost acceptance chances
- Practical strategies to make research impactful and presentation-ready

This workshop is a unique opportunity to gain insights from an internationally recognized researcher and enhance your academic journey. 

🚀 From Research to Recognition – Your Publishing Journey Starts Here!`}
            linkform=" https://forms.gle/xoFjuC26QgBS7fsJ6"
      />
    </div>
  );
};

export default TPPWorkshop;
