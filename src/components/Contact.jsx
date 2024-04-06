import React from "react";

function Contact() {
  return (
    <>
      <div
        name="contact"
        className="bg-gray-800 w-full h-screen p-4 text-white">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ">
          <div className="my-16">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Cantact Me
            </p>
          </div>
          <div className="flex justify-center items-center w-full">
            <form
              action="https://getform.io/f/lbjkoowa"
              method="POST"
              className="flex flex-col w-full md:w-[75%]">
              <input
                type="text"
                name="name"
                id=""
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="text"
                name="email"
                id=""
                placeholder="Enter your email"
                className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Enter your message"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-8 md:px-12 py-3 mx-auto my-8 flex text-center rounded-md hover:scale-110 duration-300">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
