/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Link as LinkScroll } from 'react-scroll';

function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <LinkScroll activeClass='active' to='home' spy={true} smooth={true} offset={0} duration={500}>
      <div className={`${isVisible ? 'opacity-100' : 'opacity-0'} fixed text-xl bottom-6 right-6 md:right-12 lg:right-44 border  bg-primary text-white p-2 rounded-full animate-bounce transition duration-500 ease-in-out cursor-pointer hover:bg-transparent hover:border border-primary hover:text-primary dark:hover:border-bgLight dark:hover:text-bgLight `}>
        <FaArrowUp />
      </div>
    </LinkScroll>
  )
}

export default ScrollTop;
