import React from 'react';
import "./membership.css";

const perksStudent = [
  "Free access to events & workshops",
  "Certifications & Courses",
  "Exclusive networking opportunities",
  "Skill Development",
];

const perksIntl = [
  "Everything in Student Membership",
  "Publishing discounts",
  "Premium IEEE Resources",
  "International Conferences",
];

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const LockIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const Membership = () => {
  return (
    <div
      className="Comp mt-5 pt-5 mb-10 px-4 md:px-10 flex justify-center"
      style={{ fontFamily: "var(--poppins)" }}
    >
      <div className="flex flex-col md:flex-row items-stretch gap-6 max-w-[1000px] w-full">

        {/* ── Student Membership ── */}
        <div
          className="flex-1 flex flex-col bg-white border border-gray-100 custom-shadow borderRadius-12 p-7 transition-transform duration-300 hover:-translate-y-1"
        >
          {/* Icon */}
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
            style={{ backgroundColor: "var(--color1)", color: "var(--color4)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>

          {/* Title */}
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#111827", marginBottom: "0.3rem", fontFamily: "var(--poppins)" }}>
            Student Membership
          </h2>
          <p style={{ fontSize: "0.8rem", fontWeight: 400, color: "#9ca3af", marginBottom: "1.5rem", fontFamily: "var(--poppins)", lineHeight: 1.5 }}>
            For the emerging architects of tomorrow. Be a part of IEEE-VESIT.
          </p>

          {/* Price */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", marginBottom: "0.4rem" }}>
            <span style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--color4)", fontFamily: "var(--poppins)", lineHeight: 1 }}>₹650</span>
            <span style={{ fontSize: "0.8rem", color: "#9ca3af", fontWeight: 500, marginBottom: "4px", fontFamily: "var(--poppins)" }}> / year</span>
          </div>

          <div style={{ height: "3px", width: "40px", borderRadius: "99px", backgroundColor: "var(--color2)", marginBottom: "1.5rem" }} />

          {/* Perks */}
          <div className="flex flex-col gap-3 flex-grow mb-6">
            {perksStudent.map((perk, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--color1)", color: "var(--color4)" }}
                >
                  <CheckIcon />
                </div>
                <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "#374151", fontFamily: "var(--poppins)" }}>{perk}</span>
              </div>
            ))}
            {/* Locked */}
            <div className="flex items-center gap-3 opacity-35">
              <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-gray-100 text-gray-400">
                <LockIcon />
              </div>
              <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "#6b7280", textDecoration: "line-through", fontFamily: "var(--poppins)" }}>
                Global Summit Tickets
              </span>
            </div>
          </div>

          {/* Button */}
          <button
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              borderRadius: "10px",
              fontFamily: "var(--poppins)",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--color4)",
              backgroundColor: "transparent",
              border: "2px solid var(--color2)",
              cursor: "pointer",
              transition: "all 0.25s ease",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color1)";
              e.currentTarget.style.borderColor = "var(--color1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "var(--color2)";
            }}
          >
            Begin Academic Journey
          </button>
        </div>

        {/* ── International Membership ── */}
        <div
          className="flex-1 flex flex-col border-2 border-white custom-shadow borderRadius-12 p-7 transition-transform duration-300 hover:-translate-y-1 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #f8fdff 0%, var(--color1) 100%)" }}
        >
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-52 h-52 rounded-full opacity-25 blur-3xl pointer-events-none" style={{ backgroundColor: "var(--color2)" }} />

          {/* Badge */}
          <div className="absolute top-4 right-4 z-10">
            <span
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                padding: "3px 10px",
                borderRadius: "99px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                backgroundColor: "var(--color2)",
                color: "var(--color4)",
                fontFamily: "var(--poppins)",
              }}
            >
              Most Popular
            </span>
          </div>

          {/* Icon */}
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center mb-6 relative z-10"
            style={{ backgroundColor: "var(--color3)", color: "#fff" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>

          {/* Title */}
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#111827", marginBottom: "0.3rem", fontFamily: "var(--poppins)", position: "relative", zIndex: 1 }}>
            International Membership
          </h2>
          <p style={{ fontSize: "0.8rem", fontWeight: 400, color: "#6b7280", marginBottom: "1.5rem", fontFamily: "var(--poppins)", lineHeight: 1.5, position: "relative", zIndex: 1 }}>
            The gold standard for the global elite. Upgraded version with additional features.
          </p>

          {/* Price */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", marginBottom: "0.4rem", position: "relative", zIndex: 1 }}>
            <span style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--color4)", fontFamily: "var(--poppins)", lineHeight: 1 }}>$7</span>
            <span style={{ fontSize: "0.8rem", color: "#9ca3af", fontWeight: 500, marginBottom: "4px", fontFamily: "var(--poppins)" }}> + Taxes / year</span>
          </div>

          <div style={{ height: "3px", width: "40px", borderRadius: "99px", backgroundImage: "linear-gradient(to right, var(--color4), var(--color3))", marginBottom: "1.5rem", position: "relative", zIndex: 1 }} />

          {/* Perks */}
          <div className="flex flex-col gap-3 flex-grow mb-6" style={{ position: "relative", zIndex: 1 }}>
            {perksIntl.map((perk, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "white", color: "var(--color4)" }}
                >
                  <CheckIcon />
                </div>
                <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "#1f2937", fontFamily: "var(--poppins)" }}>{perk}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <button
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              borderRadius: "10px",
              fontFamily: "var(--poppins)",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#fff",
              border: "none",
              cursor: "pointer",
              backgroundImage: "linear-gradient(to right, var(--color4), var(--color3))",
              boxShadow: "0 6px 18px rgba(122,178,211,0.35)",
              transition: "all 0.25s ease",
              letterSpacing: "0.01em",
              position: "relative",
              zIndex: 1,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 10px 22px rgba(74,98,138,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 18px rgba(122,178,211,0.35)";
            }}
          >
            Secure Global Access
          </button>
        </div>

      </div>
    </div>
  );
};

export default Membership;