import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialLinks() {
  const socailLinks = [
    {
      id: 1,
      icon: (
        <>
          LindedIn <FaLinkedin size={25} />
        </>
      ),
      href: "https://www.linkedin.com/in/vihangamel",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      icon: (
        <>
          GitHub <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/VihangaMel",
    },
    {
      id: 3,
      icon: (
        <>
          Mail <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto:vihangamelindra@gmai.com",
    },
    {
      id: 4,
      icon: (
        <>
          Resume <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: "https://linkedin.com/in/vihangamel",
      style: "rounded-br-md",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {socailLinks.map(({ id, icon, style, href }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-105px] hover:rounded-md duration-300 hover:ml-[-10px]" +
              " " +
              style
            }>
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer">
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
