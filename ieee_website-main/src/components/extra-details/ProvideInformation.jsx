import React from "react";

const benefits = [
  {
    title: "Technical Resources",
    image: "📄🔍", // Replace with actual image if needed
    bgColor: "bg-blue-500",
  },
  {
    title: "Networking Opportunities",
    image: "🌐", // Replace with actual image if needed
    bgColor: "bg-green-400",
  },
  {
    title: "Skill Development",
    image: "🎯📈", // Replace with actual image if needed
    bgColor: "bg-purple-500",
  },
  {
    title: "Recognition and Certification",
    image: "🎓📜", // Replace with actual image if needed
    bgColor: "bg-pink-500",
  },
];

const ProvideInformation = () => {
  return (
    <div className="flex justify-center gap-6 p-10 bg-gradient-to-b from-yellow-50 to-white">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className={`w-64 h-80 flex flex-col items-center justify-center rounded-2xl shadow-lg p-5 text-white ${benefit.bgColor}`}
        >
          <div className="text-5xl mb-4">{benefit.image}</div>
          <h3 className="text-xl font-bold text-center">{benefit.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProvideInformation;
