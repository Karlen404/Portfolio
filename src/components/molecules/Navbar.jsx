/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import ButtonLight from "../atoms/ButtonLight"
import SwitchMode from "../atoms/SwitchMode"

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    setScrolled(isScrolled);

    // Identifikasi bagian mana yang sedang aktif
    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('about');
    const servicesSection = document.getElementById('services');
    const projectsSection = document.getElementById('projects');
    const contactSection = document.getElementById('contact');
    
    const sectionOffsets = {
      home: homeSection.offsetTop,
      about: aboutSection.offsetTop,
      services: servicesSection.offsetTop,
      projects: projectsSection.offsetTop,
      contact: contactSection.offsetTop,
    };
  
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
  
    // Menemukan bagian yang terlihat secara penuh atau lebih dari setengah
    const visibleSection = Object.keys(sectionOffsets).find((section) => {
      const sectionTop = sectionOffsets[section];
      const sectionBottom = sectionTop + windowHeight;
  
      return (
        scrollPosition >= sectionTop - windowHeight / 2 &&
        scrollPosition <= sectionBottom - windowHeight / 2
      );
    });
  
    setActiveSection(visibleSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else if (section) {
      window.scrollTo({
        top: section.offsetTop - 60,
        behavior: 'smooth',
      });
    }
    setActiveSection(sectionId);
  };


  return (
    <nav
      className={`fixed w-full top-0 z-50 bg-white dark:bg-bgDark ${scrolled ? 'shadow dark:shadow' : ''
        }`}
    >
      <div className="flex justify-between mx-6 lg:mx-44 md:mx-12 py-5">
        <div className="logo cursor-pointer font-bold text-primary dark:text-bgLight text-2xl" onClick={() => scrollToSection('home')}>
          Karlen
        </div>
        <ul className='flex flex-row gap-3 md:gap-6'>
          <li className={`py-1 cursor-pointer hidden md:inline-block hover:text-primary ${activeSection === 'home' ? 'active text-primary font-semibold' : ''}`}
            onClick={() => scrollToSection('home')}>Home</li>
          <li className={`py-1 cursor-pointer hidden md:inline-block hover:text-primary ${activeSection === 'about' ? 'active text-primary font-semibold ' : ''}`}
            onClick={() => scrollToSection('about')}>About</li>
          <li className={`py-1 cursor-pointer hidden md:inline-block hover:text-primary ${activeSection === 'services' ? 'active text-primary font-semibold' : ''}`}
            onClick={() => scrollToSection('services')}>Services</li>
          <li className={`py-1 cursor-pointer hidden md:inline-block hover:text-primary ${activeSection === 'projects' ? 'active text-primary font-semibold' : ''}`}
            onClick={() => scrollToSection('projects')}>Projects</li>
            
          <li  onClick={() => scrollToSection('contact')}>
            <ButtonLight
              title="Let's talk"
              border="border-primary dark:border-bgLight"
              text={`text-primary dark:text-bgLight ${activeSection === 'contact' ? 'active bg-primary text-white dark:bg-bgLight dark:text-black' : ''}`}
              bgHover="hover:bg-primary dark:hover:bg-bgLight"
              textHover="hover:text-white dark:hover:text-bgDark"
            />
          </li>
          <li>
            <SwitchMode />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar