import React from "react";

const About = ({ about,adres }) => {
  return (
    <div className="lg:h-[500px] bg-green-400 bg-opacity-60 lg:flex-col md:flex md:flex-col md:h-[350px] sm:flex sm:justify-center sm:flex-col">
      <div className="lg:text-4xl md:text-2xl about lg:ml-[196px] md:ml-[30px] md:py-6 md:text-left sm:text-center sm:h-[2px]">
        About
      </div>
      <div className="lg:text-3xl lg:ml-[196px] pharaph bg-g lg:w-4/5 m lg:h-[333px]  md:h-[250px] md:w-2/3 p-6 md:ml-28 sm:mx-[10px] mt-10 md:mr-5 bg-lime-100 rounded-md sm:mb-4 overflow-auto max-h-[333px]">
        <p >{about}</p>
      </div>
    </div>
  );
};

export default About;
