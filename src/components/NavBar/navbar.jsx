import React, { useRef } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header className="shadow-md sticky">
      <p className="text-2xl tracking-wide font-bold">Lmo.dev</p>
      <div className="flex">
        <nav ref={navRef}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
