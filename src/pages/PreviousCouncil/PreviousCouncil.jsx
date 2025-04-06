import React from 'react';
import './PreviousCouncil.css';

const CouncilPage = () => {
  // Senior Council Data
  const seniorCouncil = [
    { name: 'Sheryl Bellary', post: 'Chairperson' },
    { name: 'Aditi Bombe', post: 'Chief Executive Officer' },
    { name: 'Atharv Gaonkar', post: 'Senior Treasurer' },
    { name: 'Dhanshree Pandey', post: 'Senior Editor' },
    { name: 'Parth Suryavanshi', post: 'Senior Editor' },
    { name: 'Aditya Nehete', post: 'Senior Web Editor' },
    { name: 'Hitesh Kapure', post: 'Senior Technical Advisory Board' },
    { name: 'Ashutosh Mishra', post: 'Senior Technical Advisory Board' },
    { name: 'Kimaya Nehete', post: 'Women in Engineering' },
    { name: 'Akash Choughule', post: 'Senior Volunteer' }
  ];

  // Junior Council Data
  const juniorCouncil = [
    { name: 'Anoushka Menon', post: 'Secretary' },
    { name: 'Gaurang Rane', post: 'Managing Executive Officer' },
    { name: 'Kaushik Puli', post: 'Membership and Publicity Executive Officer' },
    { name: 'Shraavani Tople', post: 'Membership and Publicity Executive Officer' },
    { name: 'Rishika Chaubal', post: 'Graphics Executive Officer' },
    { name: 'Vrushabh Karavde', post: 'Graphics Executive Officer' },
    { name: 'Tejas Chorge', post: 'Junior Editor' },
    { name: 'Kirti Eppanapelli', post: 'Junior Editor' },
    { name: 'Aditri Vishwas', post: 'Junior Web Editor' },
    { name: 'Sneha Sumbe', post: 'Junior Web Editor' },
    { name: 'Yash Uskelwar', post: 'Junior Technical Advisory Board' },
    { name: 'Prasad Gourshettiwar', post: 'Junior Technical Advisory Board' },
    { name: 'Unnati Ayalwar', post: 'Women in Engineering' },
    { name: 'Shamaila Ansari', post: 'Volunteer' },
    { name: 'Vinay Israni', post: 'Volunteer' },
    { name: 'Atharva Baheti', post: 'Volunteer' }
  ];

  return (
    <div className="council-page">
      <header className="council-header">
        <h1>Council 23-24</h1>
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