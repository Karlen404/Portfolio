/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa"

function AboutOptions() {
  const [activeOption, setActiveOption] = useState('Personal Info');

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div className=" h-auto">
      <div className='border border-primary rounded-full'>
        <div className="flex items-center justify-between">
          <div
            className={`rounded-full py-2 pl-5 pr-4 md:px-5 lg:px-10 xl:px-11 2xl:px-14 cursor-pointer ${activeOption === 'Personal Info' ? 'bg-primary text-white duration-300 ease-out' : ''}`}
            onClick={() => handleOptionClick('Personal Info')}
          >
            <p>Personal Info</p>
          </div>
          <div
            className={`rounded-full py-2 px-3 md:px-5 lg:px-10 xl:px-11 2xl:px-14 cursor-pointer ${activeOption === 'Experience' ? 'bg-primary text-white duration-300 ease-out' : ''}`}
            onClick={() => handleOptionClick('Experience')}
          >
            <p>Experience</p>
          </div>
          <div
            className={`rounded-full py-2 pr-5 pl-4 md:px-5 lg:px-10 xl:px-11 2xl:px-14 cursor-pointer ${activeOption === 'Skills' ? 'bg-primary text-white duration-300 ease-out' : ''}`}
            onClick={() => handleOptionClick('Skills')}
          >
            <p>Skills</p>
          </div>
        </div>
      </div>
      <div className=''>
        {activeOption === 'Personal Info' && <div className='mt-4 grid gap-4'>
          <p>
            I'm a Systems Information student at Mulawarman University with a fervent enthusiasm for web development.
          </p>
          <p>
            Based in Samarinda, Indonesia, I thrive in creating captivating and user-friendly websites, where intuitive design takes center stage.
          </p>
          <p>
            Beyond my academic pursuits, I'm fully committed to sharpening my web development skills and exploring new horizons in the field.
          </p>
        </div>}
        {activeOption === 'Experience' && <div className='mt-4'>

        </div>}
        {activeOption === 'Skills' && <div className='mt-4 mx-5 grid gap-4'>
          <div className='grid gap-2'>
            <p className='font-semibold'>Frontend Developer</p>
            <ul className='flex gap-2'>
              <li className='bg-primary text-bgLight text-xl rounded-full h-10 w-10 flex justify-center items-center cursor-pointer hover:bg-transparent hover:border border-primary hover:text-primary dark:hover:border-bgLight dark:text-bgLight transition duration-500 ease-in-out'>
                <FaHtml5 />
              </li>
              <li className='bg-primary text-bgLight text-xl rounded-full h-10 w-10 flex justify-center items-center cursor-pointer hover:bg-transparent hover:border border-primary hover:text-primary dark:hover:border-bgLight dark:text-bgLight transition duration-500 ease-in-out'>
                <FaCss3 />
              </li>
              <li className='bg-primary text-bgLight text-xl rounded-full h-10 w-10 flex justify-center items-center cursor-pointer hover:bg-transparent hover:border border-primary hover:text-primary dark:hover:border-bgLight dark:text-bgLight transition duration-500 ease-in-out'>
                <FaJs />
              </li>
              <li className='bg-primary text-bgLight text-xl rounded-full h-10 w-10 flex justify-center items-center cursor-pointer hover:bg-transparent hover:border border-primary hover:text-primary dark:hover:border-bgLight dark:text-bgLight transition duration-500 ease-in-out'>
                <FaReact />
              </li>
            </ul>
          </div>
          <div className='grid gap-2'>
            <p className='font-semibold'>Designer</p>
            <ul className='bg-primary text-bgLight text-xl rounded-full h-10 w-10 flex justify-center items-center cursor-pointer hover:bg-transparent hover:border border-primary hover:text-primary dark:hover:border-bgLight dark:text-bgLight transition duration-500 ease-in-out'>
              <li>
                <FaFigma />
              </li>

            </ul>
          </div>
        </div>}
      </div>
    </div>
  );
}

export default AboutOptions;
