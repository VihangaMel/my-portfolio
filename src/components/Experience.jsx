import React from "react";
import css from "../assets/css.png";
import react from "../assets/react.png";
import csharp from "../assets/csharp.png";
import c from "../assets/c.png";
import html from "../assets/html.png";
import java from "../assets/java.png";
import js from "../assets/js.png";
import wp from "../assets/wp.png";

function Experience() {
  const logo = [
    {
      id: 1,
      sorce: html,
      title: "HTML",
    },
    {
      id: 2,
      sorce: css,
      title: "CSS",
    },
    {
      id: 3,
      sorce: js,
      title: "JAVASCRIPT",
    },
    {
      id: 4,
      sorce: wp,
      title: "WordPress",
    },
    {
      id: 5,
      sorce: csharp,
      title: "CSharp",
    },
    {
      id: 6,
      sorce: java,
      title: "JAVA",
    },
    {
      id: 7,
      sorce: react,
      title: "REACT",
    },
    {
      id: 8,
      sorce: c,
      title: "C",
    },
  ];
  return (
    <>
      <div name="experience" className="bg-gray-800 w-full h-full">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
              Experience
            </p>
            <p className="py-6">These are the technologies I've worked with</p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {logo.map(({ id, sorce, title }) => (
              <div key={id} className="rounded-lg shadow-md shadow-gray-600">
                <img
                  src={sorce}
                  alt="javascript logo"
                  className="w-20 mx-auto my-8"
                />
                <p className="mb-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
