/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Tampilkan tombol saat pengguna menggulir ke bawah
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Bersihkan listener pada komponen dibongkar
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Gulir ke atas secara halus
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`${
        isVisible ? 'opacity-100' : 'opacity-0'
      } fixed text-xl bottom-6 right-6 md:right-12 lg:right-44 border  bg-primary text-white p-2 rounded-xl transition duration-500 ease-in-out cursor-pointer hover:bg-transparent hover:border border-primary hover:text-primary dark:hover:border-bgLight dark:hover:text-bgLight `}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </div>
  );
};

export default ScrollTop;
