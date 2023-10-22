import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

const Intro = () => {
  return (
    <div className="container">
      <div className="intro_container">
        <div className="img_container">
          <img src="avatar.png" />
        </div>
        <div className="text_container">
          <p className="title">Front End React Developer</p>
          <p className="desc_text">
            Hi, I'm Lwin Min Oo. A passionate front end react developer based in
            Yangon, Myanmar.
          </p>
          <div className="icons_container">
            <button>
              <FaLinkedin size={23} />
            </button>
            <button>
              <AiFillGithub size={25} />
            </button>
            <button>
              <AiFillInstagram size={25} />
            </button>
          </div>
          <div className="tech_icons_container">
            <p className="text-lg uppercase text-[#555] font-semibold mb-4">tech stack</p>
            <div className="tech_icons">
              <img src="https://skillicons.dev/icons?i=html,css" />
              <img src="https://skillicons.dev/icons?i=js,ts" />
              <img src="https://skillicons.dev/icons?i=react,next" />
              <img src="https://skillicons.dev/icons?i=tailwind,sass" />
            </div>
          </div>
        </div>
        <div className="md_img_container">
          <img src="avatar.png" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
