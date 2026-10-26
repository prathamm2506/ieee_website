import React from "react";
import Card from "../components/Card/Card";
import greshaMam from "../assets/faculty/Gresha ma'am.webp";
import ashwiniMam from "../assets/faculty/Ashwini ma'am.webp";

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
    </div>
  );
};

export default CurrentCouncil2627;
