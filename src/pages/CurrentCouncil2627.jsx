import React from "react";
import Card from "../components/Card/Card";
import greshaMam from "../assets/faculty/Gresha ma'am.webp";
import ashwiniMam from "../assets/faculty/Ashwini ma'am.webp";
import Aditi from "../assets/Council2627/Aditi.webp";
import Akash from "../assets/Council2627/Akash.webp";
import Aayan from "../assets/Council2627/Aayan.webp";
import Disha from "../assets/Council2627/Disha.webp";
import Prakruti from "../assets/Council2627/Prakruti.webp";
import Manaswini from "../assets/Council2627/Manaswini.webp";
import Riju from "../assets/Council2627/Riju.webp";
import Gayatri from "../assets/Council2627/Gayatri.webp";
import Vansh from "../assets/Council2627/Vansh.webp";
import Varnika from "../assets/Council2627/Varnika.webp";

// Add email / github / linkedin to a member later and the icons show up on the card
const councilMembers = [
  { name: "Aditi Ekawade", role: "Secretary", image: Aditi },
  { name: "Akash Murthy", role: "Senior Operations Head", image: Akash },
  { name: "Aayan Shaikh", role: "Senior PR Head", image: Aayan },
  { name: "Disha Dhamecha", role: "Senior Editor", image: Disha },
  { name: "Prakruti Mishra", role: "Treasurer", image: Prakruti },
  { name: "Manaswini Joshi", role: "Senior Graphics Head", image: Manaswini },
  { name: "Riju Mishra", role: "Senior Graphics Head", image: Riju },
  { name: "Gayatri Bajaj", role: "Senior Tech Head", image: Gayatri },
  { name: "Vansh Lalwani", role: "Senior Tech Head", image: Vansh },
  { name: "Varnika Chaurasia", role: "Women in Engineering", image: Varnika },
];

const CurrentCouncil2627 = () => {
  return (
    <div className="mt-24">
      <h2 className="text-center uppercase">Get to know us closer</h2>

      {/* Faculty */}
      <div className="flex flex-wrap justify-center gap-8 my-8">
        <Card
          name="Dr. Gresha Bhatia"
          role="Deputy HOD - Computer"
          image={greshaMam}
          email="gresha.bhatia@ves.ac.in"
        />
        <Card
          name="Dr. Ashwini Sawant"
          role="Assistant Professor - EXTC"
          image={ashwiniMam}
          email="ashwini.sawant@ves.ac.in"
        />
      </div>

      {/* Council Members */}
      <h2 className="text-center uppercase">Council Members</h2>
      <div className="flex flex-wrap justify-center gap-8 my-8">
        {councilMembers.map((member) => (
          <Card
            key={member.name}
            name={member.name}
            role={member.role}
            image={member.image}
            email={member.email}
            github={member.github}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default CurrentCouncil2627;
