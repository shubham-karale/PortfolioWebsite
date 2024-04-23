import React, { useState } from "react";

import HeroImage from "../assets/HeroImage.jpg";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800  "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2
            className="text-white 
            font-semibold text-4xl md:text-5xl lg:text-6xl"
          >
            I'm a full Stack Developer{" "}
          </h2>
          <p className="text-gray-500 py-5 max-w-md">
            I design and code beautifully simple things, and I love what I do. I
            Love to work on App Development as well as web development
          </p>
          {/* Creating Button with the Gradient Design */}
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              {/* group = On Hovering Button also transition will apply on both buttons and arrow buttons */}
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        {/* TODO: Change the Image and updated with the Photoshop Image */}
        <div>
          <img
            src={HeroImage}
            alt="HeroImage"
            className="w-80 h-80 rounded-3xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
