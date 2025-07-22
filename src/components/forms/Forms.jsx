import { useState } from "react";
import { useRef } from "react";
// import emailjs from "emailjs-com";
import { FaChevronDown, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import greshaMam from "../../assets/faculty/Gresha ma'am.webp"
import ashwiniMam from "../../assets/faculty/Ashwini ma'am.webp";
import rakshit from "../../assets/rakshit.webp"
import ayush from "../../assets/ayush.webp"
import shreshtha from "../../assets/shreshtha.webp"
import Nidhi from "../../assets/Nidhi.webp"

const teamMembers = [
  {
    name: "Dr. Gresha Bhatia",
    role: "Deupty Head of Department - Computer Engineering",
    email: "gresha.bhatia@ves.ac.in",
    linkedin: "https://www.linkedin.com/in/gresha-bhatia-80bb642a/",
    bgColor: "--color1",
    img: greshaMam,
  },
  {
    name: "Dr. Ashwini Sawant",
    role: "Assistant Professor - Electronics and Telecommunication Engineering",
    linkedin: "https://www.linkedin.com/in/ashwini-sawant-661203107/",
    email: "ashwini.sawant@ves.ac.in",
    bgColor: "--color2",
    img: ashwiniMam,
  },
  {
    name: "Rakshit Sharma",
    role: "Chairperson",
    email: "2022.rakshit.sharma@ves.ac.in",
    linkedin: "https://www.linkedin.com/in/rakshit-kumar-sharma-5b25942ab/",
    github: "https://github.com/Rakshit5467",
    bgColor: "--color1",
    img: rakshit,
  },
  {
    name: "Ayush Patil",
    role: "Chief Executive Officer",
    email: "2022.ayush.patil@ves.ac.in",
    linkedin: "https://www.linkedin.com/in/ayush-patil-977a3134b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "",
    bgColor: "--color2",
    img: ayush,
  },
  {
    name: "Shreshtha Kadam",
    role: "Secretary",
    email: "d2023.shreshtha.kadam@ves.ac.in",
    linkedin: "https://www.linkedin.com/in/shreshtha-kadam-a68052233/",
    github: "https://github.com/Shreshtha0519",
    bgColor: "--color1",
    img: shreshtha,
  },
  {
    name: "Nidhi Bamhane",
    role: "Managing Executive Officer",
    email: "2023.nidhi.bamhane@ves.ac.in",
    linkedin: "https://www.linkedin.com/in/nidhi-bamhane-13a5b72b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/Nidhi2455",
    bgColor: "--color2",
    img: Nidhi,
  },
];

export default function Forms() {
  const [activeIndex, setActiveIndex] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_0cx4ddf', // Replace with your EmailJS service ID
      'template_hbhvs8k', // Replace with your template ID
      form.current,
      'NWAs1XuuZPPppwGiQ' // Replace with your public API key
    ).then(() => {
      alert("Message sent successfully!");
      e.target.reset();
    }).catch((err) => {
      alert("Failed to send message. Try again.");
      console.error(err);
    });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-[70vh] p-6 mx-auto gap-6 w-[95%] mb-8">
      {/* Contact Form */}
      <div className="w-full lg:w-1/2 custom-shadow p-6 shadow-lg text-center">
        <h3 className="mb-4">Send a Message</h3>
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="flex-1 p-3 bg-[var(--color2)] shadow-md placeholder-[var(--black)] focus:outline-none rounded-xl"
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact Number"
              className="flex-1 p-3 bg-[var(--color2)] shadow-md placeholder-[var(--black)] focus:outline-none rounded-xl"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="text"
              name="year"
              placeholder="Year"
              className="flex-1 p-3 bg-[var(--color2)] shadow-md placeholder-[var(--black)] focus:outline-none rounded-xl"
            />
            <input
              type="text"
              name="branch"
              placeholder="Branch"
              className="flex-1 p-3 bg-[var(--color2)] shadow-md placeholder-[var(--black)] focus:outline-none rounded-xl"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 mb-4 bg-[var(--color2)] shadow-md placeholder-[var(--black)] focus:outline-none rounded-xl"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 h-28 bg-[var(--color2)] shadow-md placeholder-[var(--black)] focus:outline-none rounded-xl"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 mt-4 bg-[var(--color3)] text-white text-lg font-semibold cursor-pointer hover:bg-[var(--color4)] rounded-xl"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Team Members List */}
      <div className="w-full lg:w-1/2">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="mb-2 p-3 shadow-md overflow-hidden transition-all duration-500 ease-in-out rounded-xl"
            style={{ backgroundColor: `var(${member.bgColor})` }}
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="flex items-center space-x-3">
                <img src={member.img} alt={member.name} className="w-12 h-12 rounded-full"  style={{objectFit:"cover"}}/>
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
