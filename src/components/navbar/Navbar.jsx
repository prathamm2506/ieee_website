import React, { useState, useEffect } from "react";
import "./Navbar.css"; // Ensure responsive styles are added here
import logo from "../../assets/logo.png";
import logorev from "../../assets/logorev.png";
import logoside from "../../assets/logo-sidebar.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDropdown = (menu) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === menu ? null : menu);
    }
  };

  const handleMouseEnter = (menu) => {
    if (!isMobile) {
      setActiveDropdown(menu);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null);
    }
  };

  const toggleSidebar = () => {
    setMenuVisible(!menuVisible);
  };

  const closeSidebar = () => {
    if (isMobile) {
      setMenuVisible(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar">
        <i className="bx bx-menu" onClick={toggleSidebar}></i>
        <div className="logo">
          <img src={logo} alt="logo" className="logo-image hidden md:block" />
          <img src={logorev} alt="logo" className="logo-image md:hidden" />
        </div>
        <div
          className={menuVisible ? "nav-links show" : "nav-links"}
          style={{ left: menuVisible ? "0" : "-100%" }}
        >
          <div className="sidebar-logo logo">
            <img src={logoside} alt="logo" className="logo-image-side" />
            <span className="logo-name font-bold">IEEE VESIT</span>
            <i className="bx bx-x" onClick={toggleSidebar}></i>
          </div>
          <ul className="links">
            <Link to="/" onClick={closeSidebar}><li><a href="#">HOME</a></li></Link>

            <li onMouseEnter={() => handleMouseEnter("ieee")} onMouseLeave={handleMouseLeave}>
              <a href="#" onClick={() => toggleDropdown("ieee")}>IEEE</a>
              <i className={`bx bxs-chevron-down arrow ${activeDropdown === "ieee" ? "rotate" : ""}`}></i>
              <ul className={`sub-menu ${activeDropdown === "ieee" ? "show" : ""}`}>
                <li><a href="/myloft" className="uppercase">IEEE Xplore digital library</a></li>
                {/* <li><a href="https://standards.ieee.org/standard/" className="uppercase" target="_blank" onClick={closeSidebar}>ieee standards</a></li> */}
                <li><a href="https://spectrum.ieee.org/" className="uppercase" target="_blank" onClick={closeSidebar}>ieee spectrum</a></li>
                {/* <li><a href="#" className="uppercase" onClick={closeSidebar}>Magazines</a></li> */}
              </ul>
            </li>

            <li onMouseEnter={() => handleMouseEnter("societies")} onMouseLeave={handleMouseLeave}>
              <a href="#" onClick={() => toggleDropdown("societies")}>SOCIETIES</a>
              <i className={`bx bxs-chevron-down arrow ${activeDropdown === "societies" ? "rotate" : ""}`}></i>
              <ul className={`sub-menu ${activeDropdown === "societies" ? "show" : ""}`}>
                <Link to="/societies/wie" onClick={closeSidebar}><li><a href="#" className="uppercase">Women In Engineering</a></li></Link>
                {/* <Link to="/societies/ci" onClick={closeSidebar}><li><a href="#" className="uppercase">Computational Intelligence</a></li></Link> */}
                {/* <li><a href="#" className="uppercase" onClick={closeSidebar}>Papers</a></li> */}
                {/* <li><a href="#" className="uppercase" onClick={closeSidebar}>Magazines</a></li> */}
              </ul>
            </li>

            <li onMouseEnter={() => handleMouseEnter("council")} onMouseLeave={handleMouseLeave}>
              <a href="#" onClick={() => toggleDropdown("council")}>COUNCIL</a>
              <i className={`bx bxs-chevron-down arrow ${activeDropdown === "council" ? "rotate" : ""}`}></i>
              <ul className={`sub-menu ${activeDropdown === "council" ? "show" : ""}`}>
                <Link to="/current_council" onClick={closeSidebar}><li><a href="#" className="uppercase">Year (24-25)</a></li></Link>
                <Link to="/previousCouncil" onClick={closeSidebar}><li><a href="#" className="uppercase">Year (24-25)</a></li></Link>
              </ul>
            </li>

            <li onMouseEnter={() => handleMouseEnter("events")} onMouseLeave={handleMouseLeave}>
              <a href="#" onClick={() => toggleDropdown("events")}>EVENTS</a>
              <i className={`bx bxs-chevron-down arrow ${activeDropdown === "events" ? "rotate" : ""}`}></i>
              <ul className={`sub-menu ${activeDropdown === "events" ? "show" : ""}`}>
                <Link to="/melange" onClick={closeSidebar}><li><a href="#" className="uppercase">Upcoming</a></li></Link>
                <Link to="/events" onClick={closeSidebar}><li><a href="#" className="uppercase">Past</a></li></Link>
                {/* <li><a href="#" className="uppercase" onClick={closeSidebar}>Papers</a></li> */}
                {/* <li><a href="#" className="uppercase" onClick={closeSidebar}>Magazines</a></li> */}
              </ul>
            </li>
            <Link to="/developers" onClick={closeSidebar}><li><a href="#" onClick={closeSidebar}>DEVELOPERS</a></li></Link>
            <Link to="/contact" onClick={closeSidebar}><li><a href="#" onClick={closeSidebar}>CONTACT</a></li></Link>
            <Link to="/melange" onClick={closeSidebar}><li className="bg-[color:--color3] hover:!bg-[color:--white] duration-500"><a href="#" onClick={closeSidebar}><i class="fa-solid fa-arrow-pointer"></i> REGISTER</a></li></Link>
            <Link to="/join_ieee" onClick={closeSidebar}><li className="bg-[color:--color2] hover:!bg-[color:--white] duration-500"><a href="#" onClick={closeSidebar}><i class="fa-solid fa-hat-cowboy"></i> JOIN IEEE</a></li></Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
