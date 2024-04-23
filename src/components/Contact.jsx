import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-black to-gray-800 text-white w-full h-full p-4"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center  h-full max-auto mt-64 ">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact Me
          </p>
          <p className="py-6">Let's connect Us</p>
        </div>

        <div className="flex justify-center items-center h-full">
          <form
            action="https://getform.io/f/e3cc7369-4b3a-4a73-aef8-bfe561127e61"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 border-gray-500 rounded-md focus:outline-none text-white focus:border-gray-700"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent
                            my-4 border-2 border-gray-500 rounded-md focus:outline-none text-white focus:border-gray-700"
            />

            <textarea
              name="message"
              placeholder="Enter Your Message"
              rows="10"
              came="name"
              className="p-2 bg-transparent border-2 border-gray-500 rounded-md focus:outline-none text-white
                            my-2 focus:border-gray-700"
            ></textarea>

            <button className="btn btn-primary text-white bg-gradient-to-b from-cyan-500 to-blue-400 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300  ">
              Let's Connect
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
