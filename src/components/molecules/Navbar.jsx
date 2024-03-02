/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ButtonLight from "../atoms/ButtonLight"
import SwitchMode from "../atoms/SwitchMode"
import { Link as LinkScroll } from 'react-scroll';


function Navbar() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (
          element.offsetTop <= scrollPosition + 200 &&
          element.offsetTop + element.offsetHeight > scrollPosition + 200
        ) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav className='fixed w-full top-0 z-50 bg-white dark:bg-bgDark'>
      <div className='flex justify-between mx-6 md:mx-12 lg:mx-44 py-5'>
        <div className="logo cursor-pointer font-bold text-primary dark:text-bgLight text-2xl">
          <LinkScroll activeClass='' to='home' spy={true} smooth={true} offset={-80} duration={500}>
            Karlen
          </LinkScroll>
        </div>
        <div className='flex flex-row gap-3 md:gap-6'>
          <LinkScroll activeClass='text-primary transition duration-150' to='home' spy={true} smooth={true} offset={-80} duration={500} className='py-1 cursor-pointer hidden md:inline-block hover:text-primary'>
            Home
          </LinkScroll>
          <LinkScroll activeClass='text-primary transition duration-150' to='about' spy={true} smooth={true} offset={-80} duration={500} className='py-1 cursor-pointer hidden md:inline-block hover:text-primary'>
            About
          </LinkScroll>
          <LinkScroll activeClass='text-primary transition duration-150' to='services' spy={true} smooth={true} offset={-80} duration={500} className='py-1 cursor-pointer hidden md:inline-block hover:text-primary'>
            Services
          </LinkScroll>
          <LinkScroll activeClass='text-primary transition duration-150' to='projects' spy={true} smooth={true} offset={-80} duration={500} className='py-1 cursor-pointer hidden md:inline-block hover:text-primary'>
            Projects
          </LinkScroll>
          <LinkScroll activeClass='' to='contact' spy={true} smooth={true} offset={-80} duration={500}>

            <ButtonLight
              title="Let's talk"
              border="border-primary dark:border-bgLight"
              text={`text-primary dark:text-bgLight ${activeSection === 'contact' ? 'active bg-primary text-white dark:bg-bgLight dark:text-black' : ''}`}
              bgHover="hover:bg-primary dark:hover:bg-bgLight"
              textHover="hover:text-white dark:hover:text-bgDark"
            />
          </LinkScroll>
          <SwitchMode />
        </div>

      </div>

    </nav>
  )
}
export default Navbar