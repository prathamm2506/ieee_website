import React from 'react';
import EventDescription from '../../components/Event_description/EventDescription';
import paperPresentationImage from '../../assets/Paperquest.webp';
import { useNavigate } from 'react-router-dom';

const PaperQuest = () => {
  const navigate = useNavigate();
  return (
    <div className='mt-16'>
      <button 
        onClick={() => navigate(-1)} 
        className="ml-4 mb-4 mt-5 px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition duration-200"
      >
        ←</button>
      <EventDescription 
        title="Technical Paper Presentation Workshop"
        subtitle="Mastering the Art of Research & Presentation"
        date="October 5, 2024 | 4 PM Onwards"
        image={paperPresentationImage}
        description="The Technical Paper Presentation workshop, organized by IEEE-VESIT, provided students with a platform to showcase their research and innovation skills while learning from industry experts. Held virtually on Google Meet, the session featured Mr. Malhar Choudhary, a VESIT alumnus and Carnegie Mellon University graduate, who shared his expertise in technical writing and presentation.

        The workshop covered key aspects of structuring a technical paper, creating engaging visuals, and delivering an impactful presentation. Participants gained valuable insights into presenting research effectively and received constructive feedback from both the speaker and peers. 

        Discussions spanned various cutting-edge topics, including artificial intelligence, machine learning, data science, and cybersecurity. Mr. Choudhary provided practical guidelines and real-world experiences to help students refine their technical paper writing and presentation skills.

        The event was well-received by participants, who appreciated the opportunity to learn from an expert and enhance their research presentation abilities. IEEE-VESIT looks forward to organizing more such enriching workshops in the future."
      />
    </div>
  );
};

export default PaperQuest;
