import React from 'react'
import Navbar from './Navbar'
import homebg from "../assets/homebg.png"
import OfferCard from './OfferCard'
import Button from './Button'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className=" w-[100%] flex lg:flex-row flex-col justify-between" data-aos="fade-up">
        <div className='lg:w-[40vw] w-[80vw] lg:h-[60vh] h-[30vh] my-24 mx-12'>
          <div className="text w-full flex flex-col gap-7">
            <p className=' cardHeading font-semibold'> Start your learning journey towards excellence with EduTrino...</p>
            <p className=' w-[80%]  cardContent'>EduTrino offers highly relevant study
              materials and quality practice sets to
              provide students the boost in their
              academics.</p>
          </div>
          <div className="buttons flex mx-8 gap-8 my-16">
          <button className='bg-black text-white smallText border px-6 py-4 rounded-xl getShadow'><NavLink to = '/login'>Log in</NavLink></button>
          <button className='bg-black text-white smallText border px-6 py-4 rounded-xl getShadow'><NavLink to = '/signUp'>Sign Up</NavLink></button>
          </div>
        </div>
        <div className="image lg:flex hidden lg:w-1/2 w-[80vw] lg:2xl lg:h-[70vh] h-[40vh]"> <img src={homebg} className='w-[80%] object-contain' alt="Education" /></div>
      </div>
      <h1 className='text-center cardHeading font-semibold mt-[15vh] underline decoration-[#5ED9E1] decoration-4 underline-offset-8'>What We Offer...</h1>
      <div className="cards flex flex-col justify-center md:gap-32 gap-8 my-24 mx-12 " data-aos="fade-up">
       <div className='flex md:flex-row flex-col items-centers md:justify-center lg:gap-20 gap-5'>
       <NavLink to='/' className='lg:w-[30vw]'><OfferCard title='Get Up-to-Date Syllabus....' content="Watch out the syllabus of each subjectsto prepare accordingly for the examination " /></NavLink> 
       <NavLink to='/offeredSubjects' className='lg:w-[30vw]'><OfferCard title = 'Have a quick practice  test .........' content = "Practice relevant and important questions from the topic you want to find your strength and weakness"/></NavLink> 
        </div>
        <div className='flex md:flex-row flex-col items-centers md:justify-center lg:gap-20 gap-5'>
        <NavLink to='/offeredSubjects/questionPaper' className='lg:w-[30vw]'> <OfferCard title ='Get Access to Sample Papers.....' content = 'Have a quick practice from the question papers of recent years and from other relevant sources for you'/></NavLink> 
        <NavLink to='/dashboard' className='lg:w-[30vw]'><OfferCard title ='Review Your Key Areas .....' content = 'Get to know your strong points and those areas where you need more improvements.'/></NavLink> 
        </div>
      
      </div>
      <Footer/>
    </div>
  )
}

export default Home
