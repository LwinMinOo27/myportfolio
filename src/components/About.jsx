import React from "react";

const About = () => {
  return (
    <div className="lg:h-screen bg-[#fff] lg:flex justify-center items-center">
      <div className="max-w-lg mx-8 sm:mx-auto py-16  lg:max-w-5xl xl:max-w-7xl lg:grid grid-cols-2 items-center place-content-center">
        <img
          src="https://pbs.twimg.com/media/Dw_0zPdVsAA6GsK.jpg"
          className="rounded-3xl shadow-sm w-full h-56 sm:h-72 lg:h-96 object-cover"
        />
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <p className="uppercase font-bold text-lg text-[#430fff] mb-4">
            About me
          </p>
          <p className="text-2xl font-semibold text-[#222] mb-6">
            A dedicate Front-end Developer based in Yangon, Myanmar
          </p>
          <p className="text-[#555] font-serif text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ex,
            esse obcaecati fugit hic, soluta temporibus porro nam recusandae ad
            earum similique iure tenetur, modi quidem nemo dolorem. Consequatur,
            veritatis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusamus rem impedit obcaecati cumque. Tenetur ea officiis, error
            consequuntur praesentium harum nobis in suscipit eum placeat quod
            odit aspernatur molestias possimus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
