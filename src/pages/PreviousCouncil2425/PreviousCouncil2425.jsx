// import React from "react";
// import Card from "../../components/Card/Card"; 

// // Faculty data
// import greshaMam from "../../assets/faculty/Gresha ma'am.webp";
// import ashwiniMam from "../../assets/faculty/Ashwini ma'am.webp";

// // Senior council images
// import gaurang from "../../assets/BEs/gaurang.webp";
// import anoushka from "../../assets/BEs/anoushka.webp";
// import aditri from "../../assets/BEs/aditri.webp";
// import ashish from "../../assets/BEs/ashish.webp";
// import kaushik from "../../assets/BEs/kaushik.webp";
// import kirti from "../../assets/BEs/kirti.webp";
// import nihit from "../../assets/BEs/nihit.webp";
// import prasad from "../../assets/BEs/Prasad.webp";
// import rishika from "../../assets/BEs/rishika.webp";
// import sneha from "../../assets/BEs/sneha.webp";

// // Junior council images
// import aditi from "../../assets/TEs/aditiTE.webp";
// import akshit from "../../assets/TEs/Akshit.webp";
// import anjali from "../../assets/TEs/anjali.webp";
// import anshi from "../../assets/TEs/Anshi.webp";
// import arnav from "../../assets/TEs/Arnav.webp";
// import ayush from "../../assets/TEs/ayush.webp";
// import ishan from "../../assets/TEs/Ishan.webp";
// import kshitij from "../../assets/TEs/Kshitij.webp";
// import maithili from "../../assets/TEs/maithili.webp";
// import piyush from "../../assets/TEs/piyush.webp";
// import pratham from "../../assets/TEs/pratham.webp";
// import rakshit from "../../assets/TEs/Rakshit.webp";
// import shantanu from "../../assets/TEs/ShantanuTE.webp";
// import reet from "../../assets/TEs/Reet.webp";
// import tanay from "../../assets/TEs/Tanay.webp";
// import veydant from "../../assets/TEs/veydant.webp";

// const faculty = [
//   {
//     name: "Dr. Gresha Bhatia",
//     role: "Deputy HOD - Computer",
//     image: greshaMam,
//     email: "gresha.bhatia@ves.ac.in",
//   },
//   {
//     name: "Dr. Ashwini Sawant",
//     role: "Assistant Professor - EXTC",
//     image: ashwiniMam,
//     email: "ashwini.sawant@ves.ac.in",
//   },
// ];

// const seniorCouncil = [
//   { name: "Gaurang Pramod Rane", role: "Chairperson", image: gaurang },
//   { name: "Anoushka Menon", role: "Chief Executive Officer", image: anoushka },
//   { name: "Kaushik Puli", role: "Senior Public Relations Head", image: kaushik },
//   { name: "Rishika Chaubal", role: "Senior Graphics Head", image: rishika },
//   { name: "Prasad Gourshettiwar", role: "Senior Treasurer", image: prasad },
//   { name: "Sneha Ramesh Sumbe", role: "Senior Web Editor", image: sneha },
//   { name: "Kirti Srinivas Eppanapelli", role: "Senior Editor", image: kirti },
//   { name: "Ashish Prakash Nair", role: "Senior Technical Head", image: ashish },
//   { name: "Nihit Mistry", role: "Senior Technical Head", image: nihit },
//   { name: "Aditri Vishwas", role: "Women in Engineering", image: aditri },
// ];

// const juniorCouncil = [
//   {
//     name: "Veydant Sharma",
//     role: "Secretary",
//     image: veydant,
//     email: "2022.vey.dant@ves.ac.in",
//     linkedin: "", // Add if available
//   },
//   {
//     name: "Ishan Kiran Joshi",
//     role: "Managing Executive Officer",
//     image: ishan,
//     email: "2022.ishan.joshi@ves.ac.in",
//     github: "https://github.com/Ishan2611",
//     linkedin: "https://www.linkedin.com/in/ishan-joshi-3677042a7/",
//   },
//   {
//     name: "Kshitj Patki",
//     role: "Jr. Treasurer",
//     image: kshitij,
//     email: "2022.kshitij.patki@ves.ac.in",
//     github: "https://github.com/Kush1612",
//     linkedin: "https://www.linkedin.com/in/kshitijpatki/",
//   },
//   {
//     name: "Ayush Patil",
//     role: "Jr. PR Head",
//     image: ayush,
//     email: "2022.ayush.patil@ves.ac.in",
//     linkedin:
//       "https://www.linkedin.com/in/ayush-patil-977a3134b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//   },
//   {
//     name: "Anshi Tiwari",
//     role: "Jr. PR Head",
//     image: anshi,
//     email: "2022.anshi.tiwari@ves.ac.in",
//     github: "https://github.com/anshi1108",
//     linkedin: "https://www.linkedin.com/in/anshi-tiwari-b4a6642a7/",
//   },
//   {
//     name: "Akshit Ramrane",
//     role: "Jr. Graphics Head",
//     image: akshit,
//     email: "2022.akshit.ramrane@ves.ac.in",
//     github: "https://github.com/Akshit-Ramrane",
//     linkedin:
//       "https://www.linkedin.com/in/akshit-ramrane-b1980825b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
//   },
//   {
//     name: "Maithili Latey",
//     role: "Jr. Graphics Head",
//     image: maithili,
//     email: "", // Add if available
//     linkedin: "", // Add if available
//   },
//   {
//     name: "Anjali Thakrani",
//     role: "Jr. Web Editor",
//     image: anjali,
//     email: "", // Add if available
//     linkedin: "", // Add if available
//   },
//   {
//     name: "Pratham Matkar",
//     role: "Jr. Web Editor",
//     image: pratham,
//     email: "d2022.pratham.matkar@ves.ac.in",
//     github: "https://github.com/prathamm2506",
//     linkedin: "https://www.linkedin.com/in/pratham-matkar-a2bb77257/",
//   },
//   {
//     name: "Rakshit Sharma",
//     role: "Jr. Web Editor",
//     image: rakshit,
//     email: "2022.rakshit.sharma@ves.ac.in",
//     linkedin:
//       "https://www.linkedin.com/in/rakshit-kumar-sharma-5b25942ab/",
//   },
//   {
//     name: "Shantanu Bhosale",
//     role: "Jr. Technical Head",
//     image: shantanu,
//     email: "", // Add if available
//     linkedin: "", // Add if available
//   },
//   {
//     name: "Aditi Dubey",
//     role: "Jr. Technical Head",
//     image: aditi,
//     email: "", // Add if available
//     linkedin: "", // Add if available
//   },
//   {
//     name: "Arnav Sawant",
//     role: "Jr. Technical Head",
//     image: arnav,
//     email: "2022.arnav.sawant@ves.ac.in",
//     github: "https://github.com/arnavsawant9",
//     linkedin: "https://www.linkedin.com/in/arnavsawant9/",
//   },
//   {
//     name: "Piyush Pandey",
//     role: "Jr. Technical Head",
//     image: piyush,
//     email: "", // Add if available
//     linkedin: "", // Add if available
//   },
//   {
//     name: "Reet Sharma",
//     role: "Jr. Women In Engineering",
//     image: reet,
//     email: "2022.reet.sharma@ves.ac.in",
//   },
//   {
//     name: "Tanay Baisware",
//     role: "Jr. Editor",
//     image: tanay,
//     email: "2022.tanay.baisware@ves.ac.in",
//     linkedin:
//       "https://www.linkedin.com/in/tanay-baisware-21ab5b24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
//   },
// ];


// const PreviousCouncil2425 = () => {
//   const renderSection = (title, members) => (
//     <div className="w-full mx-auto px-4 flex flex-col items-center my-8">
//       <h3 className="uppercase my-8">{title}</h3>
//       <div className="w-full flex flex-row flex-wrap justify-center items-center gap-8">
//         {members.map((member, index) => (
//           <Card
//             key={index}
//             name={member.name}
//             role={member.role}
//             image={member.image}
//             email={member.email}
//             linkedin={member.linkedin}
//           />
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="mt-24">
//       <h2 className="text-center uppercase">Meet the Council 24-25</h2>
//       {renderSection("Faculty Incharge", faculty)}
//       {renderSection("Senior Council", seniorCouncil)}
//       {renderSection("Junior Council", juniorCouncil)}
//     </div>
//   );
// };

// export default PreviousCouncil2425;

import React from 'react';
import './PreviousCouncil2425.css';

const PreviousCouncil2425 = () => {
  // Senior Council Data
  const seniorCouncil = [
    { name: "Gaurang Pramod Rane", post: "Chairperson" },
    { name: "Anoushka Menon", post: "Chief Executive Officer" },
    { name: "Kaushik Puli", post: "Senior Public Relations Head" },
    { name: "Rishika Chaubal", post: "Senior Graphics Head" },
    { name: "Prasad Gourshettiwar", post: "Senior Treasurer" },
    { name: "Sneha Ramesh Sumbe", post: "Senior Web Editor" },
    { name: "Kirti Srinivas Eppanapelli", post: "Senior Editor" },
    { name: "Ashish Prakash Nair", post: "Senior Technical Head" },
    { name: "Nihit Mistry", post: "Senior Technical Head" },
    { name: "Aditri Vishwas", post: "Women in Engineering" },
  ];

  // Junior Council Data
  const juniorCouncil = [
    { name: "Veydant Sharma", post: "Secretary" },
    { name: "Ishan Kiran Joshi", post: "Managing Executive Officer" },
    { name: "Kshitij Patki", post: "Jr. Treasurer" },
    { name: "Ayush Patil", post: "Jr. PR Head" },
    { name: "Anshi Tiwari", post: "Jr. PR Head" },
    { name: "Akshit Ramrane", post: "Jr. Graphics Head" },
    { name: "Maithili Latey", post: "Jr. Graphics Head" },
    { name: "Anjali Thakrani", post: "Jr. Web Editor" },
    { name: "Pratham Matkar", post: "Jr. Web Editor" },
    { name: "Rakshit Sharma", post: "Jr. Web Editor" },
    { name: "Shantanu Bhosale", post: "Jr. Technical Head" },
    { name: "Aditi Dubey", post: "Jr. Technical Head" },
    { name: "Arnav Sawant", post: "Jr. Technical Head" },
    { name: "Piyush Pandey", post: "Jr. Technical Head" },
    { name: "Reet Sharma", post: "Jr. Women In Engineering" },
    { name: "Tanay Baisware", post: "Jr. Editor" },
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

export default PreviousCouncil2425;

