import React from 'react'
import Navbar from './Navbar'
import pp from "../assets/pp.png"
import { useState } from 'react'
import { NavLink } from 'react-router-dom'



const Dashboard = () => {
  const [subjects, setsubjects] = useState(["Physics","Chemistry", "Maths", "SE", "CN", "CT", "VP"])

  return (
    <div>
      <Navbar />
      <div className="upperContent flex flex-col gap-0" data-aos = "fade-up">
        <div className="personalInfo bg-[#7bede7] flex 550:flex-row 550:gap-0 gap-8 flex-col w-[93vw] mx-auto rounded-lg my-8 py-5 justify-between px-6">
          <div className='grouping flex gap-8 550:ml-[10vw] ml-0'> <div className="image w-20"><img src={pp} alt="your profile" className='w-full' /></div>
            <div className="detail flex flex-col gap-2">
              <span className="name text-2xl">Falana Dimkana</span>
              <span className="email text-lg">falana@gmail.com</span>
            </div></div>
          <div className="score flex gap-4 mr-[10vw] 550:ml-0 ml-[10vw]">
            <span className='text-2xl'>Score </span>
            <span className='bg-white border-2 border-black text-xl h-10 px-3 rounded-lg'> 00 </span>
          </div>
        </div>
        <div className="button relative w-[93vw]">
          <NavLink to= "/dashboard/leaderboard"><span className="font-semibold leaderboard absolute right-3 bg-[#abeff5] border-2 border-black px-2 py-1 mt-[-15px] rounded-lg cursor-pointer">LeaderBoard</span></NavLink>
        </div>
      </div>
      <h1 className='mt-10 lg:mt-0 cardHeading text-center font-semibold underline decoration-[#5ED9E1] decoration-[6px] underline-offset-8'>Review Your Subjects</h1>
      <div className="lowerContent flex gap-5 flex-wrap w-[93vw] mx-auto mt-16" data-aos = "fade-up">
        {subjects.map((item, index)=>{
          return(
            <React.Fragment key={index}>
           <NavLink to = {`/${item.toLowerCase()}Review`}><div className='lg:w-[20vw] md:w-[25vw] w-[40vw] h-[15vh] border-[4px] getShadow border-black rounded-lg cardHeading text-center' > {item} </div></NavLink> 
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default Dashboard
