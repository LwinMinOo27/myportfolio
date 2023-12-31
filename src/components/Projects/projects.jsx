import { Card } from "@material-tailwind/react";
import React from "react";
import { project_data } from "./data";

const Project_Card = () => {
  return (
    <div>
      {project_data.map((data) => {
        return (
          <Card
            className="shadow-lg p-4 md:p-8 rounded-lg mt-16 w-full"
            key={data.id}>
            <div>
              <img
                className="w-full h-auto object-cover shadow-md rounded-xl"
                src={data.img_url}
              />
            </div>

            <div className="my-8 text-lg font-semibold text-[#555] text-center lg:text-left">
              <div className="text-sm uppercase text-[#333] sm:flex items-center justify-center lg:justify-start">
                <p className="text-[#332add] font-bold text-xl sm:mr-2">
                  {data.title}{" "}
                </p>
                <p>({data.time})</p>
              </div>
              <p className="mt-4">{data.description}</p>
              <div className="flex max-w-max mx-auto text-lg text-[#eee] font-semibold mt-8">
                <p className="p-2 mx-2 bg-black bg-opacity-80 rounded-lg flex justify-center items-center">
                  {data.type}
                </p>
                <p className="p-2 mx-2 bg-black bg-opacity-80 rounded-lg flex justify-center items-center">
                  {data.css}
                </p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects"
      className="max-w-lg sm:mx-auto text-center md:text-left mx-8 py-32 lg:max-w-5xl lg:px-8">
      <div>
        <p className="text-[#430fff] font-bold text-lg uppercase mb-4">
          Projects
        </p>
        <p className="text-[#222] font-semibold text-2xl mb-6">
          I learn coding by building projects like these.
        </p>
        <p className="font-open-sans mb-8 text-[#555] tracking-wide">
          I've been immersed in the world of web development for the past three
          months, beginning with the fundamentals like HTML, CSS, and
          JavaScript. Currently, I'm deeply engrossed in the realm of React.js.
          As part of my journey, I've created several basic projects using
          React, and I'm eager to take my skills to the next level by building
          more sophisticated and advanced websites. The possibilities and
          potential for innovation in web development are incredibly exciting,
          and I'm committed to exploring and mastering them as I progress in my
          journey.
        </p>
      </div>
      <Project_Card />
    </section>
  );
};

export default Projects;
