import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-500 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full  ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hello,I am Shubham Karale a Full Stack Developer. I am passionate
          about coding and love to learn new technologies. I have experience in
          developing web applications using React,NextJS Node.js, Express, and
          MongoDB. I am also honed in my skills in App Development using React
          Native as well as Native Android Development. I am always looking for
          new opportunities to learn and grow. I am a quick learner and a team
          player. I am always ready to take on new challenges and solve
          problems. I am always looking for new opportunities to learn and grow.
          I am a quick learner and a team player. I am always ready to take on
          new challenges and solve problems.
        </p>
        <br />
        <p className="text-xl"></p>
      </div>
    </div>
  );
};

export default About;
