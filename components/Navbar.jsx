"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [navmenu, setNavmenu] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('black');
  const [isSticky, setIsSticky] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleNavMenu = () => {
    setNavmenu(!navmenu);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('white');
      } else {
        setColor('transparent');
        setTextColor('black');
      }
    };
    window.addEventListener('scroll', changeColor);
    return () => window.removeEventListener('scroll', changeColor);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);

      if (currentScrollPos === 0) {
        setIsSticky(false); // Disable sticky behavior when at the top of the page
        setNav(true); // Always show navbar when at the top of the page
      } else {
        setIsSticky(isVisible); // Enable sticky behavior when scrolling up
        setNav(isVisible); // Show navbar only when scrolling up
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div style={{ backgroundColor: `${isSticky ? 'white' : 'transparent'}` }} className={`block left-0 top-0 w-full z-[100] ease-in duration-300 ${isSticky ? 'sticky' : ''}`}>
      <div className='max-w-[1240px] m-auto flex justify-between items-center'>

        <ul style={{ color: 'black' }} className='hidden sm:flex text-xl p-1 my-5'>
          <li className='px-4'>
            <Link href='/'>Devin Ta</Link>
          </li>
          <li className='px-4 ml-[800px] hover:text-gray-400'>
            <Link href='/'>Portfolio</Link>
          </li>
          <li className='px-4 hover:text-gray-400'>
            <Link href='/about'>About</Link>
          </li>
          <li className='px-4 hover:text-gray-400'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div className='flex sm:hidden z-20 mr-5'>
          <div className='flex text-black w-full ml-4 mr-80 my-5'>Devin Ta</div>
          <div onClick={handleNavMenu} className='flex items-center p-3'>
          {navmenu ? <AiOutlineClose size={20} style={{color: 'white'}}/> : <AiOutlineMenu size={20} style={{color: 'black'}}/> }
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={navmenu
          ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex z-10 justify-center items-center w-full h-screen text-white bg-black text-center ease-in duration-300'
          : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex z-10 justify-center items-center w-full h-screen text-white bg-black text-center ease-in duration-300'
        }>
          <ul>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/' onClick={handleNavMenu}>Portfolio</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/about' onClick={handleNavMenu}>About</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact' onClick={handleNavMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
