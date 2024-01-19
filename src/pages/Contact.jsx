/* eslint-disable no-unused-vars */
import Title from "../components/atoms/Title"
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import Title2 from "../components/atoms/Title2";
import React, { useState, useEffect } from 'react';
import ButtonFill from "../components/atoms/ButtonFill";

function Contact() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date());
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getTimeInfo = () => {
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };

    return currentTime.toLocaleString('en-US', options);
  };

  return (
    <div className="pt-10 my-10" id="contact">
      <Title title="Contact" />
      <div className="md:flex md:justify-between md:gap-12 lg:gap-24">
        <div className="w-full gap-8 grid">
          <div>
            <h2 className="text-3xl">Hello theredkbsadad Lorem ipsum dolor sit amet, consectetur adipisicing elit. maiores?</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, nam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, dolorum!</p>
          </div>
          <form action="">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col md:flex-row gap-5 justify-between md:gap-5">
                <div className="w-full relative z-0">
                  <input type="text" id="name" name="name" placeholder="" className=" peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"
                  />
                  <label htmlFor="name" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75">Your name</label>

                </div>
                <div className="w-full relative z-0">
                  <input type="email" id="email" name="email" placeholder="" className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0" />
                  <label htmlFor="email" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75">Your email</label>

                </div>
              </div>
              <div className="relative z-0">
                <textarea name="message" id="message" rows="5" placeholder="" className="peer block w-full appearance-none border-0 border-b border-accent-100 bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0"></textarea>
                <label htmlFor="message" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-body-3 2xl:text-body-2 text-secondary-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75">Your message</label>
              </div>
              <div>
                {/* <button action="submit" ></button> */}
                <ButtonFill title="Send Message" />
              </div>
            </div>
          </form>
        </div>
        <div className="grid gap-8 mt-20 md:mt-0">
          <div className="flex flex-col">
            <Title2 title2="Contact Detail" />
            <p>karlensyaputra@gmail.com</p>
          </div>
          <div className="flex flex-col gap-1">
            <Title2 title2="My Digital Spaces" />
            <div>
              <div className="grid gap-4">
                <div className="flex items-center gap-2">
                  <div className="bg-primary text-bgLight text-xl rounded-full h-10 w-10 flex justify-center items-center cursor-pointer hover:bg-transparent hover:border border-primary hover:text-primary dark:hover:border-bgLight dark:text-bgLight transition duration-500 ease-in-out">
                    <a href="https://github.com/Karlen404" target="blank" rel="noopener noreferrer">
                      <BsGithub />
                    </a>
                  </div>
                  <div><p>Github</p></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-primary text-bgLight text-xl rounded-full h-10 w-10 flex justify-center items-center cursor-pointer hover:bg-transparent hover:border border-primary hover:text-primary dark:hover:border-bgLight dark:text-bgLight transition duration-500 ease-in-out">
                    <a href="" target="blank" rel="noopener noreferrer">
                      <BsLinkedin />
                    </a>
                  </div>
                  <div><p>Linkedin</p></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-primary text-bgLight text-xl rounded-full h-10 w-10 flex justify-center items-center cursor-pointer hover:bg-transparent hover:border border-primary hover:text-primary dark:hover:border-bgLight dark:text-bgLight transition duration-500 ease-in-out">
                    <a href="" target="blank" rel="noopener noreferrer">
                      <BsInstagram />
                    </a>
                  </div>
                  <div><p>Instagram</p></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <Title2 title2="Location" />
            <div>
              <p>Samarinda, Indonesia</p>
              <p>{getTimeInfo()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact