import React from "react";

const About = () => {
  return (
    <div className="bg-[#fff] py-16 md:py-32 lg:px-8">
      <div className="max-w-lg mx-8 sm:mx-auto lg:max-w-5xl lg:grid grid-cols-2 items-center place-content-center">
        <img
          src="https://pbs.twimg.com/media/Dw_0zPdVsAA6GsK.jpg"
          className="rounded-3xl shadow-sm w-full h-56 sm:h-72 lg:h-96 object-cover"
        />
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <p className="uppercase font-bold text-lg text-[#430fff] mb-4 text-center lg:text-left">
            About me
          </p>
          <p className="text-2xl font-semibold text-[#222] mb-6 text-center lg:text-left">
            A dedicate Front-end Developer based in Yangon, Myanmar
          </p>
          <p className="text-[#555] font-open-sans tracking-wide">
            I am a passionate and aspiring web developer currently pursuing an
            internship to further develop my skills. With a solid foundation in
            HTML, CSS, and JavaScript, I am eager to contribute to web projects
            and learn from experienced professionals. I thrive on
            problem-solving, collaboration, and continuously expanding my
            knowledge in the ever-evolving world of web development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
