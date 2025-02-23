import React from "react";

const Faq = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-100 text-center text-lg font-semibold py-3 border-b">FAQ</div>
        <div className="divide-y">
          {faqItems.map((item, index) => (
            <details key={index} className="group">
              <summary
                className={`flex justify-between items-center p-3 cursor-pointer ${item.bgColor} group-open:${item.bgHoverColor}`}
              >
                <span className="flex items-center">
                  {/* Circle with colored background and black arrow */}
                  <span
                    className={`flex justify-center items-center w-10 h-10 rounded-full border-2 border-gray-300 ${item.bgColor}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="black"
                      className="w-6 h-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </span>
                  {item.question}
                </span>
              </summary>
              <p className="p-3 bg-gray-50">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

const faqItems = [
  {
    question: "Who can join IEEE-VESIT?",
    answer: "Anyone interested in technology and innovation.",
    bgColor: "bg-purple-100",
    bgHoverColor: "bg-purple-200",
  },
  {
    question: "Why should I join IEEE?",
    answer: "IEEE provides networking opportunities and access to resources.",
    bgColor: "bg-blue-100",
    bgHoverColor: "bg-blue-200",
  },
  {
    question: "How does IEEE benefit my career?",
    answer: "IEEE helps in professional growth through events and certifications.",
    bgColor: "bg-yellow-100",
    bgHoverColor: "bg-yellow-200",
  },
  {
    question: "How does IEEE support innovation and research?",
    answer: "IEEE funds and publishes research, fostering innovation.",
    bgColor: "bg-orange-100",
    bgHoverColor: "bg-orange-200",
  },
  {
    question: "How does IEEE promote community and collaboration?",
    answer: "Through conferences, workshops, and networking events.",
    bgColor: "bg-green-100",
    bgHoverColor: "bg-green-200",
  },
];

export default Faq;
