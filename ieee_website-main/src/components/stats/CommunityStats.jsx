import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './CommunityStats.css'; // Import the CSS file for variables

const CommunityStats = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [startCount, setStartCount] = useState(false);

  // Trigger count-up animation when component is visible
  if (inView && !startCount) {
    setStartCount(true);
  }

  return (
    <div className="community-stats-container" ref={ref}>
      <div className="community-stats-cards">
        {/* Members Card */}
        <div className="community-stats-card">
          <p className="card-title">Members</p>
          <h2 className="card-count">
            {startCount && <CountUp start={0} end={50} duration={5} separator="," />}k+
          </h2>
        </div>

        {/* Workshops and Events Card */}
        <div className="community-stats-card">
          <p className="card-title">Workshops and Events</p>
          <h2 className="card-count">
            {startCount && <CountUp start={0} end={700} duration={5} separator="," />}+
          </h2>
        </div>

        {/* Research and Development Card */}
        <div className="community-stats-card">
          <p className="card-title">Research and Development</p>
          <h2 className="card-count">
            {startCount && <CountUp start={0} end={300} duration={5} separator="," />}k+
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CommunityStats;