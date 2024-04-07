import React from "react";
import HeroImg from "../assets/2517915 - Copy.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className=" h-screen w-full bg-gray-800">
      <div className="max-w-screen-xl mx-auto flex flex-col  justify-around h-full px-4 items-center md:flex-row">
        <div className="flex flex-col justify-center  h-full w-full mx-auto md:ml-20">
          <h2 className="text-5xl mt-44 md:text-5xl text-white">
            I'm a Vihanga Melindra
          </h2>
          <p className="text-gray-500 text-lg py-4 max-w-lg">
            I am a student of University of Moratuwa studying Bachelor of
            Information Technology.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600">
              <Link to="contact" smooth duration={500}>
                Contact Me
              </Link>
              <span className="group-hover:rotate-90 duration-300 text-2xl">
                <MdOutlineKeyboardArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className="w-full sm:mt-10">
          <img
            src={HeroImg}
            alt="A programmer developing a progeam"
            className="mx-auto max-w-full mb-16"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
