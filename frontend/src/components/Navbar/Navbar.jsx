import React, { useState } from 'react'
import { FaSun, FaMoon  } from "react-icons/fa";

const Navbar = () => {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));

  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      setDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  };

  return (
    <div className="w-full h-[65px] dark:bg-black fixed top-0 left-0 md:h-20 flex flex-row items-center  justify-between px-4 md:px-11 bg-white md:bg-zinc-200 bg-opacity-60 z-50">
      <div className="flex items-center gap-2 md:gap-4">
        <img
          className="w-10 h-10 md:w-12 md:h-12 rounded-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr03k2c7t1un6zCx17UOnAsQFbKvMfvfNKDw&s"
          alt="logo"
        />
        <div className="text-left">
          <h1 className="text-[23px] md:text-2xl text-blue-600 font-bold">SEO Headline <span className='text-violet-600'>Generator</span></h1>
          <p className="text-[15px] md:text-[15px] text-black dark:text-white font-light">
            AI-powered headlines for better handling
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={toggleDarkMode}
          className="mt-2 text-sm md:text-base md:mt-0 border-none bg-gray-800 dark:bg-cyan-400 rounded-md px-3 md:px-5 py-1 md:py-2 text-white font-mono font-semibold w-full sm:w-auto"
        >
          {dark ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </div>
  )
}

export default Navbar