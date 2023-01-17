import React from "react";
import ivantiASE from "../assets/experience/ivantiASE.png"
import ivantiIntern from "../assets/experience/ivantiIntern.png"

const Experience = () => {
  const experiences = [
    {
      id: 1,
      src: ivantiASE,
      description:  <p>
         * Refactored 50% of the entire ISM product singlehandedly to make it completely accessible.
        <br />* Revamped the UI to provide a cleaner aesthetic to the product.
        <br />* Collaborated across teams to resolve 15+ customer reported issues with 100% customer satisfaction.
      </p>
    },
    {
      id: 2,
      src: ivantiIntern,
      description:  <p>
            * Improved the security of the application by 30% by successfully removing all the unsafe-inline eval and inline JS/CSS
code. <br />
            * Refactored 100% of the entire codebase to work without any errors and without the need for allowing unsafe-inline and
unsafe-eval in the CSP (Content Security Policy).
        </p>
    },
    
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Industry Experience
          </p>
          <p className="py-6">Check out my previous Industry Experience here</p>
        </div>


        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {experiences.map(({ id, src, description }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg relative w-96 h-60 text-white overflow-hidden cursor-pointer transition-all duration-700 card">
              

<div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gray-900 transition-all duration-100 delay-200 z-20 hover:opacity-0">
<img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
    </div>

              <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-black transition-all z-10 card-back">
    {description}
    </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Experience;
