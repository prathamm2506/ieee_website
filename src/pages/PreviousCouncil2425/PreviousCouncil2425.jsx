import React from 'react';
import './PreviousCouncil2425.css';

const CouncilPage = () => {
  // Senior Council Data
  const seniorCouncil = [
    { name: 'Gaurang Pramod Rane', post: 'Chairperson' },
    { name: 'Anoushka Menon', post: 'Chief Executive Officer' },
    { name: 'Kaushik Puli', post: 'Senior Public Relations Head' },
    { name: 'Rishika Chaubal', post: 'Senior Graphics Head' },
    { name: 'Prasad Gourshettiwar', post: 'Senior Treasurer' },
    { name: 'Sneha Ramesh Sumbe', post: 'Senior Web Editor' },
    { name: 'Kirti Srinivas Eppanapelli', post: 'Senior Editor' },
    { name: 'Ashish Prakash Nair', post: 'Senior Technical Head' },
    { name: 'Nihit Mistry', post: 'Senior Technical Head' },
    { name: 'Aditri Vishwas', post: 'Women in Engineering' },
  ];

  // Junior Council Data
  const juniorCouncil = [
    { name: 'Veydant Sharma', post: 'Secretary' },
    { name: 'Ishan Kiran Joshi', post: 'Managing Executive Officer' },
    { name: 'Kshitj Patki', post: 'Jr. Treasurer' },
    { name: 'Ayush Patil', post: 'Jr. PR Head' },
    { name: 'Anshi Tiwari', post: 'Jr. PR Head' },
    { name: 'Akshit Ramrane', post: 'Jr. Graphics Head' },
    { name: 'Maithili Latey', post: 'Jr. Graphics Head' },
    { name: 'Anjali Thakrani', post: 'Jr. Web Editor' },
    { name: 'Pratham Matkar', post: 'Jr. Web Editor' },
    { name: 'Rakshit Sharma', post: 'Jr. Web Editor' },
    { name: 'Shantanu Bhosale', post: 'Jr. Technical Head' },
    { name: 'Aditi Dubey', post: 'Jr. Technical Head' },
    { name: 'Arnav Sawant', post: 'Jr. Technical Head' },
    { name: 'Piyush Pandey', post: 'Jr. Technical Head' },
    { name: 'Reet Sharma', post: 'Jr. Women In Engineering' },
    { name: 'Tanay Baisware', post: 'Jr. Editor' }
  ];

  return (
    <div className="council-page">
      <header className="council-header">
        <h1>Council 24-25</h1>
        <p className="subtitle">Meet the team that made it all happen</p>
      </header>

      <section className="council-section senior-council">
        <div className="section-header">
          <h2>Senior Council</h2>
          <div className="header-decoration"></div>
        </div>
        <div className="members-grid">
          {seniorCouncil.map((member, index) => (
            <div className="member-card" key={`senior-${index}`}>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-post">{member.post}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="council-section junior-council">
        <div className="section-header">
          <h2>Junior Council</h2>
          <div className="header-decoration"></div>
        </div>
        <div className="members-grid">
          {juniorCouncil.map((member, index) => (
            <div className="member-card" key={`junior-${index}`}>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-post">{member.post}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CouncilPage;