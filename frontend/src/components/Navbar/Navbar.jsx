import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full h-[65px] md:h-20 flex flex-row items-center justify-between px-4 md:px-11 bg-white md:bg-zinc-200 bg-opacity-60 z-50">
      <div className="flex items-center gap-2 md:gap-4">
        <img
          className="w-10 h-10 md:w-12 md:h-12 rounded-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr03k2c7t1un6zCx17UOnAsQFbKvMfvfNKDw&s"
          alt="logo"
        />
        <div className="text-left">
          <h1 className="text-[23px] md:text-2xl text-blue-600 font-bold">SEO Headline <span className='text-violet-600'>Generator</span></h1>
          <p className="text-[15px] md:text-[15px] font-light">
            AI-powered headlines for better handling
          </p>
        </div>
      </div>
      <button className="hidden md:block mt-2 md:mt-0 border-none bg-cyan-500 rounded-md px-4 md:px-5 py-2 text-white font-mono font-semibold w-full sm:w-auto">
        SignUp
      </button>
    </div>
  )
}

export default Navbar