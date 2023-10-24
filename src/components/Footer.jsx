import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div
      className="
      text-center sm:text-left block sm:flex justify-around items-center
      bg-[#222] py-16 text-white text-xl font-semibold
      ">
      <p>
        Copyright &copy; {new Date().getFullYear()}. All rightes are reserved.
      </p>
      <div className="flex justify-center mt-4 sm:mt-0">
        <FaLinkedin size={25}
          className="
          mr-4 hover:text-blue-600"
        />
        <AiFillGithub size={25}
          className="
          hover:text-blue-600" />
      </div>
    </div>
  );
};

export default Footer;
