import React, { useRef } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import "./navbar.css";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <BrowserRouter>
    <header className="shadow-md fixed right-0 left-0 top-0 z-50">
      <p className="text-2xl tracking-wide font-bold">Lmo.dev</p>
      <div className="flex">
        <nav ref={navRef}>
          <Link to="#home">Home</Link>
          <Link to="#about">About</Link>
          <Link to="#projects">Projects</Link>
          <Link to="#contact">Contact</Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
    </BrowserRouter>
  );
};

export default Navbar;
