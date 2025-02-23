import React from "react";
import logo from '../../assets/logo-sidebar.png';

export default function Footer() {
  return (
    <div>
      <footer className="bg-[var(--white)] py-8">
        <div className="flex items-center justify-between my-4">
          <div className="border-t border-[var(--black)] flex-grow mx-2"></div>
          <p className="text-[var(--p)] font-semibold italic text-center">Innovating Tomorrow Empowering Today</p>
          <div className="border-t border-[var(--black)] flex-grow mx-2"></div>
        </div>

        <div className="w-full mx-auto flex flex-col justify-between lg:flex-row items-center lg:items-start px-4 lg:px-8 my-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center justify-center mb-6 lg:mb-0">
            <img
              src={logo} // Updated to forward slashes
              alt="IEEE-VESIT Logo"
              className="mx-auto lg:mx-0 mb-2"
              style={{ maxHeight: "150px" }}
            />
            <h2 className="text-lg font-semibold mb-2 text-[var(--black)] text-center">IEEE VESIT</h2>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold mb-2 text-[var(--black)]">Quick Links</h2>
            <ul>
              <li>
                <a href="#" className="hover:text-[var(--color3)]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--color3)]">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--color3)]">
                  Council
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--color3)]">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--color3)]">
                  Developers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:text-left">
            <h2 className="text-lg font-semibold mb-2 text-[var(--black)] text-center lg:text-left">Contact us</h2>
            <p className="mt-2 flex flex-row text-center lg:text-left gap-4 text-[var(--black)] ">
              {/* <i className="fa-solid fa-location-crosshairs text-2xl"></i> */}
              Vivekanand Education Society's Institute Of Technology
              <br />
              Hashu Advani Memorial Complex,
              <br />
              Collector's Colony, Chembur, Mumbai, Maharashtra 400074
            </p>
            <p className="mt-6 flex flex-row items-start text-center justify-center lg:justify-start gap-4 text-[var(--black)]">
              {/* <i className="fa-solid fa-headset text-2xl"></i> */}
              <a href="tel:+919867615388" className="hover:text-[var(--color3)]">
                +91 9867615388 - Gaurang Rane (Chairperson)
              </a>
            </p>
          </div>

          <div className="mt-8 lg:mt-0">
          <h2 className="text-lg font-semibold mb-2 text-[var(--black)] text-center lg:text-left">Social Links</h2>
            <ul>
              <li>
                <a href="#" className="hover:text-[var(--color3)] flex flex-row items-center justify-center lg:justify-start gap-2">
                  <i className="fa-brands fa-instagram text-2xl"></i>
                  <span className="ml-2">ieee_vesit</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--color3)] flex flex-row items-center justify-center lg:justify-start gap-2">
                  <i className="fa-brands fa-linkedin-in text-2xl"></i>
                  <span className="ml-2">ieeevesit</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--color3)] flex flex-row items-center justify-center lg:justify-start gap-2">
                  <i className="fa-brands fa-github text-2xl"></i>
                  <span className="ml-2">ieee-vesit</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:ieee.vesit@ves.ac.in"
                  className="hover:text-[var(--color3)] flex flex-row items-center justify-center lg:justify-start gap-2"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-at text-2xl"></i>
                  <span className="ml-2">ieee.vesit@ves.ac.in</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="w-full text-center">
          <hr className="w-4/5 mx-auto bg-[var(--black)] h-0.5 mb-8"/>
          <small>© 2025 IEEE-VESIT, All Rights Reserved.</small>
        </div>
      </footer>
    </div>
  );
}
