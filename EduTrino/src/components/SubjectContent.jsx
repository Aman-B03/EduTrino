import React from 'react'
import arrow from '../assets/arrow.svg'
import { NavLink } from 'react-router-dom'
import UnderlineDiv from './UnderlineDiv'

const SubjectContent = (props) => {
  return (
    <div className='md:w-[60%] w-[90%] mx-auto mt-10 flex flex-col gap-10'>
      <div className="upper flex justify-between md:w-[60%] w-[60%]">
        <span className="arrow"><NavLink to='/offeredSubjects'><img src={arrow} alt="back-arrow" className='500:w-[50px] w-[35px] hover:translate-y-[-4px] transition-all duration-200' /></NavLink></span>
        <span className="subject cardHeading font-semibold underline underline-offset-[10px] decoration-[#5ED9E1] decoration-[6px]">{props.subject}</span>
      </div>
      <div className="lower overflow-auto border-[4px] border-black rounded-lg min-h-[80vh] flex flex-col gap-3 p-3" data-aos = "fade-up">
      {props.chapters.map((item,  index) => {
        return (
          <React.Fragment key = {index}> 
      <NavLink to = {`/${item.toLowerCase().replace(' ', '-')}Practice`}><span className='each-chapter'>{item}</span></NavLink>
        <UnderlineDiv/>
        </React.Fragment>
        )
      })}
      </div>
    </div>
  )
}

export default SubjectContent
