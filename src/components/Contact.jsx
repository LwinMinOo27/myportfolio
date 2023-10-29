import React from "react";
import { BiSolidMapPin } from "react-icons/bi";
import { GrMail } from "react-icons/gr";

const icons = [
  {
    id: 0,
    icon: (
      <BiSolidMapPin
        fontSize={50}
        className="mr-4 shadow-md bg-white shadow-gray-500 text-blue-500 rounded-full p-3"
      />
    ),
    type: "Location",
    desc: "Yangon,Myanmar",
  },
  {
    id: 1,
    icon: (
      <GrMail
        fontSize={50}
        className="mr-4 shadow-md bg-white shadow-gray-500 text-blue-500 rounded-full p-3"
      />
    ),
    type: "Mail",
    desc: <a href="mailto:21tyrantlmo@gmail.com">21tyrantlmo@gmail.com</a>,
  },
];

const Contact = () => {
  return (
    <div className="bg-[#eee] py-32 px-16" id="contact">
      <div className="md:max-w-4xl mx-auto">
        <div className="text-center md:text-left">
          <p className="text-xl font-bold text-blue-500 mb-4">Contact</p>
          <p className="text-2xl font-semibold text-[#333]">
            Don't be shy. Hit me up!
          </p>
        </div>

        <div className="md:flex">
          {icons.map((icon) => {
            return (
              <div className="block md:flex items-center mt-8 py-4 md:mr-16">
                <div className="flex justify-center">{icon.icon}</div>
                <div className="text-center md:text-left -ml-3 md:ml-0">
                  <p className="mt-2 font-semibold text-xl">{icon.type}</p>
                  <p className="text-[#555]">{icon.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
