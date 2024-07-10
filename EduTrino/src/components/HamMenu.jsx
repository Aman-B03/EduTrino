import React from 'react'
import hamBurger from '../assets/hamBurger.svg'
import cross from '../assets/cross.svg'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'



const HamMenu = () => {
    const [isHamMenu, setIsHamMenu] = useState(false)
    const tapHamMenu = () => {
        setIsHamMenu(!isHamMenu)
      
    }
    
    useEffect(() => {
        if (isHamMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isHamMenu]);


    return (<>
        <div className='w-[5vw] relative right-0'>
            <img src={isHamMenu ? cross : hamBurger}  alt="Menu" className={isHamMenu? ' w-full z-30':'w-full z-30' }onClick={tapHamMenu} />
        </div>
        <div className={isHamMenu ? "pt-10 flex flex-col gap-5 items-center bg-slate-900 z-20 text-white text-2xl w-[100vw] h-[100vh] fixed top-[10vh] left-0" : "hidden"}>
            <NavLink to ='/'><li className='list-none hover:bg-slate-800 hover:text-[28px]'>Home</li></NavLink>
            <NavLink to ='/offeredSubjects'><li className='list-none hover:bg-slate-800 hover:text-[28px]'>Practice</li></NavLink>
            <NavLink to ='/dashboard'><li className='list-none hover:bg-slate-800 hover:text-[28px]'>Dashboard</li></NavLink>
        </div>
    </>
    )
}

export default HamMenu
