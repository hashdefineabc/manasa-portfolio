import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const TechnicalSkills = () => {

  return (
    <div
      name="TechnicalSkills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Technical Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <br />
        <br />
        
        <div>
          <p className="text-4xl font-semibold">
            Front-end
          </p>
          <br />
          <p className="text-2xl"> 
            ReactJS, Angular, Redux, HTML, CSS, Bootstrap, MaterialUI, TailwindCSS
          </p>
        </div>

        <br />
        <br />
        <br />
        
        <div>
          <p className="text-4xl font-semibold">
            Back-end
          </p>
          <br />
          <p className="text-2xl"> 
            NodeJS, ExpressJS, MySQL, MongoDB, Java Spring, Python Django, Python Flask, ExtJS
          </p>
        </div>

        <br />
        <br />
        <br />

        <div>
          <p className="text-4xl font-semibold">
            Programming Languages
          </p>
          <br />
          <p className="text-2xl"> 
            Java, JavaScript, Python, C, C++, C#
          </p>
        </div>

        <br />
        <br />

        
      </div>
    </div>
  );
};

export default TechnicalSkills;
