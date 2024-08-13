import { useState, useEffect } from "react";
import "./navbar2.scss";

const Navbar2 = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
    }
  };

  const [visible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down and past 100px, hide the navbar
      setIsVisible(false);
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up, show the navbar
      setIsVisible(true);
    }

    // Update the last scroll position
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const translateY = visible ? 0 : -100; // Translate to -100px when hidden, 0 when visible

  return (
    <div
      className="main-header"
      style={{
        transform: `translateY(${translateY}%)`,
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <div className="top-container">
        <div className="top-text">Random cim, Budapest XI. ker-let</div>
        <div className="icons">
          <div className="icon-item">
            <img src="/facebook.png" alt="" />
          </div>
          <div className="icon-item">
            <img src="/instagram.png" alt="" />
          </div>
          <div className="icon-item">
            <img src="/dribbble.png" alt="" />
          </div>
        </div>
      </div>
      <div className="top-bar">
        <div className="logo">
          <img src="./logo2.png" alt="" />
        </div>
        <div className="menu-items">
          <div onClick={() => scrollToSection("Home")} className="item">
            Home
          </div>
          <div onClick={() => scrollToSection("Services")} className="item">
            Services
          </div>
          <div onClick={() => scrollToSection("Portfolio")} className="item">
            Portfolio
          </div>
          <div onClick={() => scrollToSection("Contacts")} className="item">
            Contacts
          </div>
          <div onClick={() => scrollToSection("About")} className="item">
            About
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
