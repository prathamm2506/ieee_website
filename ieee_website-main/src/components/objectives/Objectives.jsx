import React from "react";

const Objectives = () => {
  return (
    <div className="min-h-screen bg-[var(--green)] flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontSize: "var(--heading-font-size, 1.5rem)", color: "var(--heading-color, #1f2937)" }}>
        Our Objectives
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        {['01', '02', '03'].map((number, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-6 max-w-sm"
            style={{ backgroundColor: "var(--card-bg-color, #ffffff)", boxShadow: "var(--card-shadow, 0 4px 6px rgba(0, 0, 0, 0.1))", borderRadius: "var(--card-border-radius, 1rem)" }}
          >
            <div
              className="text-3xl font-bold flex items-center justify-center rounded-full mb-4"
              style={{
                backgroundColor: "var(--primary-color, #22c55e)",
                color: "var(--number-color, #ffffff)",
                width: "var(--number-size, 3.5rem)",
                height: "var(--number-size, 3.5rem)"
              }}
            >
              {number}
            </div>
            <p
              className="text-center"
              style={{
                fontFamily: "var(--font-family, Arial, sans-serif)",
                color: "var(--text-color, #4b5563)",
                fontSize: "var(--text-font-size, 1rem)"
              }}
            >
              Workshops: IEEE-VESIT makes sure to cover all the trending domains
              and conduct detailed workshops on them. In the workshops, along
              with in-depth knowledge, a project is made so that the
              participants also get hands-on experience.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Objectives;
