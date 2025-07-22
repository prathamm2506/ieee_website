import React from 'react';
import EventDescription from '../../components/Event_description/EventDescription';
import financeImage from '../../assets/finance.webp';

const FinancialLiteracy = () => {
  return (
    <div className='mt-16'>
      <button 
        onClick={() => navigate(-1)} 
        className="ml-4 mb-4 mt-5 px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition duration-200"
      >
        ←</button>
      <EventDescription 
        title="Financial Literacy Workshop"
        subtitle="Smart Investing Awareness Program"
        date="One-Day Workshop by IEEE-VESIT"
        image={financeImage}
        description="IEEE-VESIT hosted a one-day Financial Literacy Workshop under the Smart Investing Awareness Program, aimed at equipping students with essential money management skills and smart investment knowledge.

        The session kicked off with an introduction to the concept of investment and explored different types of investment risks. Students learned how these risks can impact their finances and discovered practical techniques to manage them effectively.

        The workshop further explored smart investment strategies — from setting clear financial goals to understanding risk tolerance and selecting the right investment options. Real-life examples and scenarios were shared to help students visualize how early investing and avoiding common mistakes can build long-term wealth.

        Breaking down complex financial concepts into simple, actionable steps, the session empowered students to take control of their financial future and plan their money wisely."
      />
    </div>
  );
};

export default FinancialLiteracy;
