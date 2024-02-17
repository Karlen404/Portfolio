/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './animate.css'
function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`absolute bottom-10 md:hidden right-3 space-y-8 opacity-0 transition-opacity duration-500 ${isVisible ? 'opacity-100' : ''
          }`}

      >
        <p className='rotate-90'>scroll</p>
        <div className="relative h-[1px] w-10 rotate-90 overflow-hidden">
          <span className='snake-line absolute h-1 w-10 translate-x-10 bg-bgDark dark:bg-bgLight'></span>
        </div>
      </div>

      <div
        className={`absolute bottom-10 hidden md:block space-y-8 opacity-0 transition-opacity duration-500 ${isVisible ? 'opacity-100' : ''
          }`}

      >
        <p className='rotate-90 text-start'>scroll</p>
        <div className="relative h-[1px] w-10 rotate-90 overflow-hidden">
          <span className='snake-line absolute h-1 w-10 translate-x-10 bg-bgDark dark:bg-bgLight'></span>
        </div>
      </div>
    </>
  )
}

export default ScrollIndicator