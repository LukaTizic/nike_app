"use client";

import { headerLogo } from "@/assets/images";
import Image from "next/image";
import { navLinks } from "@/constants";
import { hamburger } from "@/assets/icons";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);

  const handleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className='padding-x py-8 absolute z-20 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <Image src={headerLogo} alt='logo' width={130} height={29} />
        </a>

        <ul className='flex-1 flex justify-end items-center gap-16 max-lg:hidden'>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className='fonts-montserrat leading-normal font-bold text-lg text-slate-gray
                hover:border-b-2
                hover:border-red-500 
                
                hover:text-red-500
                
'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block  '>
          <Image
            src={hamburger}
            alt='hamburger'
            width={25}
            height={25}
            onClick={handleNav}
            className={` cursor-pointer lg:hidden ${
              showNav ? "inline-block rotate-90" : ""
            }`}
          />
          <ul
            className={
              showNav
                ? "   text-xl font-bold absolute right-0 border-2 border-red-500 text-gray-700 lg:hidden shadow-xl  "
                : "hidden"
            }
          >
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className=' bg-white block px-20 py-5 
                  text-red-600 hover:bg-red-600 hover:text-white  
'
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
