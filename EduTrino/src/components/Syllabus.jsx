import React from 'react'
import Navbar from './Navbar'

const Syllabus = () => {
  return (
    <>
    <Navbar/>
    <div className='flex flex-col gap-24 mt-10 pl-20'>
      <div className="twelve flex flex-col gap-5">
        <h1 className='cardHeading font-semibold underline decoration-[#5ED9E1] decoration-[6px] underline-offset-8'>Class 12 Syllabus</h1>
        <div className="content"> Here comes the syllabus </div>
      </div>
      <div className="eleven flex flex-col gap-5">
        <h1 className='cardHeading font-semibold underline decoration-[#5ED9E1] decoration-[6px] underline-offset-8'>Class 12 Syllabus</h1>
        <div className="content"> Here comes the syllabus </div>
      </div>
      </div>
    </>
  )
}

export default Syllabus
