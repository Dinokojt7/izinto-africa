import React, { useState, useEffect } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { HiMenuAlt2 } from 'react-icons/hi';
import Logo from '../assets/Artwork.png';
import { HiChevronDown } from "react-icons/hi";


const Navbar = () => {
  const [nav, setNav] = useState(true);
  const [list, setList] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSubList = () => {
    setList(!list);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > -1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className='flex justify-between items-center my-auto py-2 max-w-[1240] mx-auto px-4 font-semibold text-[#242424]'>
        <div className='flex items-center w-full'>
          <div className='ml-8 mt-1 mr-2' onClick={handleNav}>
            <HiMenuAlt2 size={32} />
          </div>
          <div className='w-full text-3xl font-bold text-[#966C3B]'>
            <img src={Logo} alt='/' style={{ width: "8rem" }} />
          </div>
          <ul className='flex text-[#48443E] text-lg whitespace-nowrap items-right justify-end'>
            <li className='p-4 flex'>
            <div>Be Our Partner</div>
              <div className='mt-1' onClick={handleNav}>
              <HiChevronDown   size={22} />
              </div>
            </li>
            <li className='p-4'>Help Center</li>
          </ul>
        </div>
        {/* Custom styles for the .scrolled class */}
        <style jsx>{`
          .scrolled {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: rgb(253, 251, 248, 0.95); /* 80% opacity */
            z-index: 1000;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
        `}
        </style>
      </div>
    </div>
  );
};

export default Navbar;


