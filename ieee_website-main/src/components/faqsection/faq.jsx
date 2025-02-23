import React, { useState } from "react";

const faqItems = [
  { question: "Who can join IEEE-VESIT?", answer: "Anyone interested in technology and innovation.", bgColor: "bg-purple-100", bgHoverColor: "bg-purple-200" },
  { question: "Why should I join IEEE?", answer: "IEEE provides networking opportunities and access to resources.", bgColor: "bg-blue-100", bgHoverColor: "bg-blue-200" },
  { question: "How does IEEE benefit my career?", answer: "IEEE helps in professional growth through events and certifications.", bgColor: "bg-yellow-100", bgHoverColor: "bg-yellow-200" },
  { question: "How does IEEE support innovation and research?", answer: "IEEE funds and publishes research, fostering innovation.", bgColor: "bg-orange-100", bgHoverColor: "bg-orange-200" },
  { question: "Who can join IEEE-VESIT?", answer: "Students and professionals from all technical domains.", bgColor: "bg-green-100", bgHoverColor: "bg-green-200" },
  { question: "How does IEEE promote community and collaboration?", answer: "Through conferences, workshops, and networking events.", bgColor: "bg-red-100", bgHoverColor: "bg-red-200" },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md">
        <div className="text-center text-lg font-semibold py-3">FAQ</div>
        <div className="divide-y">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex items-center p-3 text-left ${item.bgColor} hover:${item.bgHoverColor} focus:outline-none rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105`}
                aria-expanded={openIndex === index}
              >
                {/* Triangle inside a Circle */}
                <span
                  className={`flex items-center justify-center w-7 h-7 mr-3 border border-gray-600 rounded-full transition-transform duration-300`}
                >
                  <svg
                    className={`w-3 h-3 transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-90" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                  </svg>
                </span>
                {item.question}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 p-3 bg-gray-50 shadow-md rounded-lg" : "max-h-0 p-0"
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
