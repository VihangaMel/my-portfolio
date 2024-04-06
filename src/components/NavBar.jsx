import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
function NavBar() {
  const navItems = [
    { id: 1, item: "home" },
    { id: 2, item: "about" },
    { id: 3, item: "portfolio" },
    { id: 4, item: "experience" },
    { id: 5, item: "contact" },
  ];
  const [nav, setNav] = useState(false);
  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-gray-800">
      <div>
        <h1 className="text-xl ml-3 md:text-3xl">VihangaMel</h1>
      </div>
      <ul className="hidden lg:flex text-3xl ">
        {navItems.map(({ id, item }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-black-500 hover:scale-105 duration-200 mr-1">
            <Link to={item} smooth duration={500}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white lg:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 right-0 w-full h-screen  bg-gray-800">
          {navItems.map(({ id, item }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-xl hover:scale-105 duration-200 md:text-4xl text-white">
              <Link
                onClick={() => setNav(!nav)}
                to={item}
                smooth
                duration={500}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
