import { useRef } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import greshaMam from "../../assets/faculty/Gresha ma'am.webp";
import ashwiniMam from "../../assets/faculty/Ashwini ma'am.webp";
import rakshit from "../../assets/rakshit.webp";
import ayush from "../../assets/ayush.webp";
import shreshtha from "../../assets/shreshtha.webp";
import Nidhi from "../../assets/Nidhi.webp";

const teamMembers = [
  {
    name: "Dr. Gresha Bhatia",
    role: "Deputy Head of Department - Computer Engineering",
    email: "gresha.bhatia@ves.ac.in",
    linkedin: "https://www.linkedin.com/in/gresha-bhatia-80bb642a/",
    img: greshaMam,
    color: "var(--color1)",
  },
  {
    name: "Dr. Ashwini Sawant",
    role: "Assistant Professor - Electronics and Telecommunication Engineering",
    linkedin: "https://www.linkedin.com/in/ashwini-sawant-661203107/",
    email: "ashwini.sawant@ves.ac.in",
    img: ashwiniMam,
    color: "var(--light-blue)",
  },
  {
    name: "Rakshit Sharma",
    role: "Chairperson",
    email: "2022.rakshit.sharma@ves.ac.in",
    linkedin: "https://www.linkedin.com/in/rakshit-kumar-sharma-5b25942ab/",
    github: "https://github.com/Rakshit5467",
    img: rakshit,
    color: "var(--light-blue)",
  },
  {
    name: "Ayush Patil",
    role: "Chief Executive Officer",
    email: "2022.ayush.patil@ves.ac.in",
    linkedin: "https://www.linkedin.com/in/ayush-patil-977a3134b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    img: ayush,
    color: "var(--color1)",
  },
  {
    name: "Shreshtha Kadam",
    role: "Secretary",
    email: "d2023.shreshtha.kadam@ves.ac.in",
    linkedin: "https://www.linkedin.com/in/shreshtha-kadam-a68052233/",
    github: "https://github.com/Shreshtha0519",
    img: shreshtha,
    color: "var(--color1)",
  },
  {
    name: "Nidhi Bamhane",
    role: "Managing Executive Officer",
    email: "2023.nidhi.bamhane@ves.ac.in",
    linkedin: "https://www.linkedin.com/in/nidhi-bamhane-13a5b72b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/Nidhi2455",
    img: Nidhi,
    color: "var(--light-blue)",
  },
];

export default function Forms() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_0cx4ddf", "template_hbhvs8k", form.current, "NWAs1XuuZPPppwGiQ")
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch((err) => {
        alert("Failed to send message. Try again.");
        console.error(err);
      });
  };

  return (
    <div
      className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-6"
      style={{ fontFamily: "var(--poppins)" }}
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">

        {/* ── Contact Form (Left) ── */}
        <div className="w-full lg:w-5/12 flex flex-col">
          <div className="mb-5">
            <p
              style={{
                fontFamily: "var(--poppins)",
                fontSize: "var(--small)",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--color3)",
                marginBottom: "0.6rem",
              }}
            >
              Get in touch
            </p>
            <h2
              style={{
                fontFamily: "var(--poppins)",
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                fontWeight: 700,
                color: "var(--color4)",
                marginBottom: "0.5rem",
                lineHeight: 1.2,
              }}
            >
              Send a message
            </h2>
            <p
              style={{
                fontFamily: "var(--poppins)",
                fontSize: "0.95rem",
                fontWeight: 400,
                color: "#6b7280",
                lineHeight: 1.6,
              }}
            >
              Have questions about IEEE-VESIT memberships or upcoming events? Fill out the form below.
            </p>
          </div>

          <div className="bg-white border border-[var(--color1)] borderRadius-12 p-8 sm:p-10 custom-shadow transition-all duration-300 flex-grow flex flex-col">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 flex-grow">

              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex flex-col gap-1.5 flex-1">
                  <label style={labelStyle}>Your name</label>
                  <input
                    type="text" name="name" placeholder="John Doe" required
                    style={inputStyle}
                    onFocus={handleFocus} onBlur={handleBlur}
                  />
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <label style={labelStyle}>Contact No</label>
                  <input
                    type="text" name="contact" placeholder="+91 00000 00000"
                    style={inputStyle}
                    onFocus={handleFocus} onBlur={handleBlur}
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex flex-col gap-1.5 flex-1">
                  <label style={labelStyle}>Year</label>
                  <input
                    type="text" name="year" placeholder="e.g. SE"
                    style={inputStyle}
                    onFocus={handleFocus} onBlur={handleBlur}
                  />
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <label style={labelStyle}>Branch</label>
                  <input
                    type="text" name="branch" placeholder="e.g. CMPN"
                    style={inputStyle}
                    onFocus={handleFocus} onBlur={handleBlur}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label style={labelStyle}>Email Address</label>
                <input
                  type="email" name="email" placeholder="john@example.com" required
                  style={inputStyle}
                  onFocus={handleFocus} onBlur={handleBlur}
                />
              </div>

              <div className="flex flex-col gap-1.5 flex-grow mb-2">
                <label style={labelStyle}>Message</label>
                <textarea
                  name="message" placeholder="How can we help you?" required
                  style={{ ...inputStyle, minHeight: "130px", resize: "none" }}
                  onFocus={handleFocus} onBlur={handleBlur}
                />
              </div>

              <button
                type="submit"
                style={{
                  fontFamily: "var(--poppins)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "#fff",
                  padding: "0.9rem 1.5rem",
                  borderRadius: "12px",
                  border: "none",
                  cursor: "pointer",
                  backgroundImage: "linear-gradient(to right, var(--color4), var(--color3))",
                  boxShadow: "0 8px 20px rgb(122,178,211,0.3)",
                  transition: "all 0.3s ease",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 12px 25px rgb(74,98,138,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgb(122,178,211,0.3)";
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* ── Team Members (Right) ── */}
        <div className="w-full lg:w-7/12 flex flex-col pt-2 lg:pt-0">
          <div className="mb-5 hidden lg:block">
            {/* invisible spacer to align with left column label */}
            <p style={{ ...labelStyle, visibility: "hidden", marginBottom: "0.6rem" }}>Spacer</p>
            <h2
              style={{
                fontFamily: "var(--poppins)",
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                fontWeight: 700,
                color: "var(--color4)",
                marginBottom: "0.5rem",
                lineHeight: 1.2,
              }}
            >
              Meet The Team
            </h2>
            <p
              style={{
                fontFamily: "var(--poppins)",
                fontSize: "0.95rem",
                fontWeight: 400,
                color: "#6b7280",
                lineHeight: 1.6,
              }}
            >
              Reach out to our leadership council and faculty directly.
            </p>
          </div>

          <div className="lg:hidden mb-5">
            <p
              style={{
                fontFamily: "var(--poppins)",
                fontSize: "var(--small)",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--color3)",
                marginBottom: "0.6rem",
              }}
            >
              Leadership
            </p>
            <h2
              style={{
                fontFamily: "var(--poppins)",
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                fontWeight: 700,
                color: "var(--color4)",
                lineHeight: 1.2,
              }}
            >
              Meet The Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center borderRadius-12 p-6 transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-white overflow-hidden custom-shadow"
                style={{ backgroundColor: member.color || "var(--color1)" }}
              >
                <div className="absolute inset-0 bg-white opacity-40 mix-blend-overlay pointer-events-none" />

                {/* Profile Image */}
                <div className="relative mb-4 z-10 pt-1">
                  <div className="w-20 h-20 rounded-full p-1 bg-white custom-shadow mx-auto transition-transform duration-500 group-hover:scale-110">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="z-10 flex flex-col flex-grow w-full items-center">
                  <h3
                    style={{
                      fontFamily: "var(--poppins)",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#111827",
                      marginBottom: "0.3rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--poppins)",
                      fontSize: "0.78rem",
                      fontWeight: 500,
                      color: "var(--color4)",
                      opacity: 0.8,
                      marginBottom: "1.2rem",
                      lineHeight: 1.5,
                      padding: "0 0.5rem",
                    }}
                  >
                    {member.role}
                  </p>

                  {/* Social Links */}
                  <div className="mt-auto flex justify-center gap-3 w-full">
                    <a
                      href={`mailto:${member.email}`}
                      target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center custom-shadow hover:-translate-y-1 transition-transform duration-300"
                      style={{ color: "var(--color4)" }}
                      title="Email"
                    >
                      <FaEnvelope size={14} />
                    </a>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank" rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center custom-shadow hover:-translate-y-1 transition-transform duration-300"
                        style={{ color: "var(--color4)" }}
                        title="LinkedIn"
                      >
                        <FaLinkedin size={14} />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank" rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center custom-shadow hover:-translate-y-1 transition-transform duration-300"
                        style={{ color: "var(--color4)" }}
                        title="GitHub"
                      >
                        <FaGithub size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

/* ── Shared style objects ── */
const labelStyle = {
  fontFamily: "var(--poppins)",
  fontSize: "0.875rem",
  fontWeight: 500,
  color: "#374151",
  marginLeft: "2px",
};

const inputStyle = {
  width: "100%",
  fontFamily: "var(--poppins)",
  fontSize: "0.95rem",
  fontWeight: 400,
  color: "#1f2937",
  backgroundColor: "#f9fafb",
  border: "1px solid #f3f4f6",
  borderRadius: "12px",
  padding: "0.75rem 1rem",
  outline: "none",
  transition: "all 0.2s ease",
  boxShadow: "0 1px 3px rgb(0,0,0,0.04)",
};

function handleFocus(e) {
  e.target.style.backgroundColor = "#ffffff";
  e.target.style.borderColor = "var(--color3)";
  e.target.style.boxShadow = "0 0 0 4px var(--color1)";
}

function handleBlur(e) {
  e.target.style.backgroundColor = "#f9fafb";
  e.target.style.borderColor = "#f3f4f6";
  e.target.style.boxShadow = "0 1px 3px rgb(0,0,0,0.04)";
}