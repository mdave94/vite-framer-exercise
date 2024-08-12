import { useState, useEffect } from "react";
import "./navbar2.scss";

const Navbar2 = () => {
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
          <div className="item">Home</div>
          <div className="item"> Services</div>
          <div className="item">Portfolio</div>
          <div className="item">Contacts</div>
          <div className="item">About</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
