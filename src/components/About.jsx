import React from "react";

function About() {
  return (
    <>
      <div name="about" className="w-full bg-gray-800 text-white sm:pt-0 pt-24">
        <div className="max-w-screen-lg p-4 mx-auto w-full h-full flex flex-col justify-center">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About Me
            </p>
          </div>
          <p className="text-xl mt-16">
            Welcome to my portfolio! I'm Vihanga Melindra, a dedicated and
            ambitious software engineering student currently pursuing a Bachelor
            of Information Technology degree at the esteemed University of
            Moratuwa. My journey in software engineering has been marked by a
            passion for innovation and problem-solving. Through a combination of
            academic coursework and hands-on experience, I have honed my
            technical skills and developed a keen understanding of software
            development principles.
          </p>
          <br />
          <p className="text-xl mb-20">
            From developing complex systems to crafting user-friendly websites,
            my projects encompass a diverse range of endeavors. I thrive in
            collaborative environments where I can contribute my skills in
            problem-solving, adaptability, and creativity. As I continue to grow
            and evolve in this ever-changing field, I am excited to embark on
            new challenges and make meaningful contributions to the world of
            software development. Explore my portfolio to learn more about my
            projects and experiences, and feel free to reach out—I'm always
            eager to connect and discuss exciting opportunities!
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
