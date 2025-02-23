import { useState } from "react";
import { FaChevronDown, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import img1 from "../../assets/photo.jpeg";

const teamMembers = [
  {
    name: "Dr. Gresha Bhatia",
    role: "Professor and mentor in the engineering department.",
    email: "gresha@example.com",
    linkedin: "https://www.linkedin.com/in/gresha",
    github: "https://github.com/gresha",
    bgColor: "--color1",
    img: img1,
  },
  {
    name: "Dr. Ashwini Sawant",
    role: "Head of research and development.",
    email: "ashwini@example.com",
    linkedin: "https://www.linkedin.com/in/ashwini",
    github: "https://github.com/ashwini",
    bgColor: "--color2",
    img: img1,
  },
  {
    name: "Gaurang Rane",
    role: "Chairperson",
    email: "gaurang@example.com",
    linkedin: "https://www.linkedin.com/in/gaurang",
    github: "https://github.com/gaurang",
    bgColor: "--color1",
    img: img1,
  },
  {
    name: "Anoushka Menon",
    role: "Chief Executive Officer",
    email: "anoushka@example.com",
    linkedin: "https://www.linkedin.com/in/anoushka",
    github: "https://github.com/anoushka",
    bgColor: "--color2",
    img: img1,
  },
  {
    name: "Veydant Sharma",
    role: "Secretary",
    email: "veydant@example.com",
    linkedin: "https://www.linkedin.com/in/veydant",
    github: "https://github.com/veydant",
    bgColor: "--color1",
    img: img1,
  },
  {
    name: "Ishan Joshi",
    role: "Managing Executive Officer",
    email: "ishan@example.com",
    linkedin: "https://www.linkedin.com/in/ishan",
    github: "https://github.com/ishan",
    bgColor: "--color2",
    img: img1,
  },
];

export default function Forms() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-[70vh] p-6 mx-auto gap-6 w-[95%] mb-8">
      {/* Contact Form */}
      <div className="w-full lg:w-1/2 custom-shadow p-6 shadow-lg text-center">
        <h3 className="mb-4">Send a Message</h3>
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="flex-1 p-3 bg-[var(--color2)] shadow-md placeholder-[var(--black)] focus:outline-none"
          />
          <input
            type="text"
            placeholder="Contact Number"
            className="flex-1 p-3 bg-[var(--color2)] shadow-md placeholder-[var(--black)] focus:outline-none"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            type="text"
            placeholder="Year"
            className="flex-1 p-3 bg-[var(--color2)] shadow-md placeholder-[var(--black)] focus:outline-none"
          />
          <input
            type="text"
            placeholder="Branch"
            className="flex-1 p-3 bg-[var(--color2)] shadow-md placeholder-[var(--black)] focus:outline-none"
          />
        </div>
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 bg-[var(--color2)] shadow-md placeholder-[var(--black)] focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 h-28 bg-[var(--color2)] shadow-md placeholder-[var(--black)] focus:outline-none"
        ></textarea>
        <button className="w-full p-3 mt-4 rounded-full bg-[var(--color3)] text-white text-lg font-semibold cursor-pointer hover:bg-[var(--color4)]">
          Submit
        </button>
      </div>

      {/* Team Members List */}
      <div className="w-full lg:w-1/2">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="mb-2 p-3 shadow-md overflow-hidden transition-all duration-500 ease-in-out"
            style={{ backgroundColor: `var(${member.bgColor})` }}
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="flex items-center space-x-3">
                <img src={member.img} alt={member.name} className="w-12 h-12 rounded-full" />
                <p>{member.name}</p>
              </div>
              <FaChevronDown
                className={`transition-transform duration-300 ease-in-out ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                activeIndex === index ? "max-h-72" : "max-h-0"
              }`}
            >
              <div className="ml-14 mt-2">
                <small>{member.role}</small>
              </div>
              <div className="flex ml-14 gap-4 mt-2">
                <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer">
                  <FaEnvelope />
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
