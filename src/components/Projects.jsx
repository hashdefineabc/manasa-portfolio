import React from "react";

import stockProject from "../assets/projects/stockProject.png";
import leetcodeExtension from '../assets/projects/leetcode.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Stock Market Simulation",
      src: stockProject,
      url: "https://github.com/hashdefineabc/OrangeSofaTradesDBMS",
    },
    {
      id: 2,
      title: "Leetcode Difficulty Hider Chrome Extension",
      src: leetcodeExtension,
      url: "https://github.com/hashdefineabc/leetcode-extension-hide-difficulty/tree/manasa"
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, url }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button onClick={() => window.location.href = url} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
