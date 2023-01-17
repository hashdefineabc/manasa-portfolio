import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I’m a very passionate coder. I love designing and building projects and providing solutions in the field of computer science. I am always curious to learn and go in-depth into the concepts that interest me.
        </p>
        <br />

        <p className="text-xl">
        I am a Software Engineer and my experiences lie in the domain of software development, and mobile app development. I am keenly interested in software engineering applications, web development, and mobile app development and am actively looking for opportunities for the same. I am currently looking for SWE Summer 2023 Internships/Coops.
        </p>
        <br />
        
        <p className="text-xl">
        I am a strong engineering professional with a UG focused on Computer Science. Currently pursuing MS in CS at Northeastern University.
        </p>

        <br />

        <p className="text-xl">
        Skilled in Java, MVC, Flutter, Python (Programming Language), C++, HTML frameworks of NodeJs, GraphQL, Data Structures, and Algorithms, Software Development, Software Engineering, Agile, Waterfall Model, Web Development, React, NodeJs, Express, Django, Flask, CI/CD, Python/C/C++/JS, Java, MySQL, MongoDB
        </p>
      </div>
    </div>
  );
};

export default About;
