import React from 'react';
import EventDescription from '../../components/Event_description/EventDescription.jsx';
import mongoInitImage from '../../assets/mongo.png';
import { useNavigate } from 'react-router-dom';

const MongoInit = () => {
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
        title="MongoInit"
        subtitle="Hands-on MongoDB Database Implementation Workshop"
        date="4th and 5th july, 2025"
        image={mongoInitImage}
        description={`IEEE-VESIT hosted MongoInit, a two-day technical workshop dedicated to MongoDB database implementation, aimed at providing students with both theoretical knowledge and hands-on experience in NoSQL database management. Conducted on Google Meet, the workshop was led by junior council members Samarth Adsare, Purva Mhatre, Udayan Kundu, and Vedika Parab, with technical support from Nafeesa Memon and Sudarsana Krishnan.

Day 1 began with an introduction to MongoDB and its fundamental concepts, including the difference between SQL and NoSQL, MongoDB terminologies, JSON vs BSON, and the use of MongoDB Atlas, Compass, and Shell. This was followed by practical demonstrations covering CRUD operations, database and collection management, query operators, and JSON imports. The session concluded with the initial phase of a hands-on project — setting up a cluster in MongoDB Atlas, connecting with Compass, and designing basic database models.

Day 2 focused on completing the remaining 60% of the project. Participants explored projections, aggregations, and advanced CRUD integration within the project. The session highlighted how JSON documents are managed in the cloud and how MongoDB can be applied in real-world development workflows. The workshop concluded with a Q&A session and feedback collection, leaving participants with practical skills in MongoDB setup, data handling, and project-based implementation.`}
      />
    </div>
  );
};

export default MongoInit;
