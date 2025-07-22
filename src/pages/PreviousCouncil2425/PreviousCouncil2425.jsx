import React from 'react';
import './PreviousCouncil2425.css';
import Anshi from "../assets/TEs/Anshi.webp";
import Arnav from "../assets/TEs/Arnav.webp";
import ayush from "../assets/TEs/ayush.webp";
import Ishan from "../assets/TEs/Ishan.webp";
import Kshitij from "../assets/TEs/Kshitij.webp";
import maithili from "../assets/TEs/maithili.webp";
import piyush from "../assets/TEs/piyush.webp";
import pratham from "../assets/TEs/pratham.webp";
import Rakshit from "../assets/TEs/Rakshit.webp";
import Reet from "../assets/TEs/Reet.webp";
import Tanay from "../assets/TEs/Tanay.webp";
import veydant from "../assets/TEs/veydant.webp";
import ShantanuTE from "../assets/TEs/ShantanuTE.webp"
import anjali from "../assets/TEs/anjali.webp"
import anoushka from "../assets/BEs/anoushka.webp"
import ashish from "../assets/BEs/ashish.webp"
import gaurang from "../assets/BEs/gaurang.webp"
import rishika from "../assets/BEs/rishika.webp"
import nihit from "../assets/BEs/nihit.webp"
import kirti from "../assets/BEs/kirti.webp"
import kaushik from "../assets/BEs/kaushik.webp";
import sneha from "../assets/BEs/sneha.webp";
import aditri from "../assets/BEs/aditri.webp";
import aditiTE from "../assets/TEs/aditiTE.webp"
import greshaMam from "../assets/faculty/Gresha ma'am.webp"
import ashwiniMam from "../assets/faculty/Ashwini ma'am.webp"
import Akshit from "../assets/TEs/Akshit.webp"
import Prasad from "../assets/BEs/Prasad.webp"

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