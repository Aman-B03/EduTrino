import React from 'react'
import Navbar from './Navbar'
import SubjectCard from './SubjectCard'
import physicsImage from "../assets/physicsImage.png"
import chemistryImage from "../assets/chemistryImage.png"
import mathImage from "../assets/mathImage.jpg"
import CNImage from "../assets/CNImage.png"
import CTImage from "../assets/CTImage.png"
import CImage from "../assets/CImage.png"
import SEImage from "../assets/SEImage.png"
import { NavLink } from 'react-router-dom'

const OfferedSubjects = () => {
  return (
    <div>
      <Navbar />
      <div className="mainContent flex flex-col gap-5" data-aos = "fade-up">
        <h1 className='cardHeading font-semibold underline underline-offset-[10px] decoration-[#5ED9E1] text-center mt-20 decoration-[6px]'>Our Offered Subjects</h1>
        <div className="subjectCards1 flex lg:flex-row flex-col gap-x-16 500:px-24 px-8 justify-between">
          <NavLink to = '/physics'><SubjectCard image={physicsImage} subject='Physics'/></NavLink>
          <NavLink to = '/chemistry'><SubjectCard image={chemistryImage} subject='Chemistry' /></NavLink>
          <NavLink to = '/maths'><SubjectCard image={mathImage} subject='Maths' /></NavLink>
        </div>
        <div className="subjectCards2 flex lg:flex-row flex-col gap-x-16 500:px-24 px-8 justify-between">
          <NavLink to = '/cn'><SubjectCard image={CNImage} subject='Computer Network' /></NavLink>
          <NavLink to = '/ct'><SubjectCard image={CTImage} subject='Contemporary Tech..' /></NavLink>
          <NavLink to = '/vp'><SubjectCard image={CImage} subject='Visual Program..' /></NavLink>
          
        </div>
        <NavLink className='lg:w-[25vw] w-[75vw] mx-auto' to = '/se'><SubjectCard className='mb-4' image={SEImage} subject='Software Eng..' /></NavLink>
      </div>
    </div>
  )
}

export default OfferedSubjects
