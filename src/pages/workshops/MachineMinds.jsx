import React from 'react';
import EventDescription from '../../components/Event_description/EventDescription';
import machineMindsImage from '../../assets/Machineminds.webp';
import { useNavigate } from 'react-router-dom';

const MachineMinds = () => {
  const navigate = useNavigate();
  return (
    <div className='mt-16'>
      <button 
        onClick={() => navigate(-1)} 
        className="ml-4 mb-4 mt-5 px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition duration-200"
      >
        ←</button>
      <EventDescription 
        title="Machine Minds"
        subtitle="Exploring AI & ML Fundamentals"
        date="Two-Day Workshop"
        image={machineMindsImage}
        description="IEEE-VESIT hosted Machine Minds, a hands-on AI and ML workshop introducing students to key concepts and real-world applications. Day one covered the fundamentals, including supervised and unsupervised learning, data preprocessing, and feature engineering using Pandas and NumPy. 

        On day two, participants explored model evaluation, hyperparameter tuning, and advanced ML techniques with Scikit-Learn. The highlight was a hands-on project where students built full ML pipelines, working with real-world datasets and overcoming challenges like data inconsistencies and overfitting. 

        The event bridged the gap between theoretical AI/ML knowledge and practical implementation, empowering students with skills essential for the evolving tech industry."
      />
    </div>
  );
};

export default MachineMinds;
