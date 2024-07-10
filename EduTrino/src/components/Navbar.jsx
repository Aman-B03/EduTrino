import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState,useEffect } from 'react';
import HamMenu from './HamMenu';

const Navbar = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isHamMenu, setisHamMenu] = useState(false)

  const tapHamMenu = () => {
    setisHamMenu(!isHamMenu)
  
}

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
  <div className=' flex  justify-between w-full h-[8vh] md:px-20 px-4 py-12'>
      <li className='text-4xl font-bold list-none'><NavLink to="/">EduTrino</NavLink></li>
    {!isMobile? (
      <div className="navContent flex gap-10 text-2xl">
      <li className='list-none '><NavLink className={(e)=> {return e.isActive? 'underline decoration-[#5ED9E1] decoration-4 underline-offset-8': ''}} to="/">Home</NavLink></li>
      <li className='list-none'><NavLink className={(e)=> {return e.isActive? 'underline decoration-[#5ED9E1] decoration-4 underline-offset-8': ''}} to="/offeredSubjects">Practice</NavLink></li>
      <li className='list-none'><NavLink className={(e)=> {return e.isActive? 'underline decoration-[#5ED9E1] decoration-4 underline-offset-8': ''}} to="/dashboard">Dashboard</NavLink></li>
      </div>
    ): (<HamMenu/>)}
    </div>

    </>
  )
}

export default Navbar