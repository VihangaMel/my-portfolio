import React from "react";
// import ProjectTemp from "../assets/project-temp.png";
import Project1 from "../assets/ceyvola.mp4";
import Project2 from "../assets/m-arch.mp4";

function Portfolio() {
  const portfolioProjects = [
    // Fixed typo in the variable name
    {
      id: 1,
      source: Project1,
    },
    {
      id: 2,
      source: Project2,
    },
  ];

  return (
    <div name="portfolio" className="bg-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolioProjects.map(({ id, source }) => (
            <div key={id} className="rounded-lg shadow-md shadow-gray-600">
              {/* <img
                    src={sorce}
                    alt="project"
                    className="rounded-t-md duration-200 hover:scale-105"
                  /> */}
              <video
                autoPlay={true}
                muted
                loop
                className="rounded-t-md duration-200"
                aria-label={`Project ${id}`} // Added aria-label for accessibility
              >
                <source src={source} type="video/mp4" />
              </video>

              {/* You can uncomment this section if you plan to add buttons */}
              {/* 
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div> 
              */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
