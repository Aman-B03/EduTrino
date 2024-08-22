import React from 'react'
import Div from './Div'
import { NavLink } from 'react-router-dom'

const ShowSummary = () => {
  return (
    <div>
       <div className="ml-2 px-4 py-5 sidebar md:flex rounded-xl hidden flex-col border min-h-[50vh] border-slate-400 w-[300px] xl:w-[400px] bg-yellow-50 text-black ">
                    <div className="flex gap-3 mb-8">
                        <NavLink to='/offeredSubjects' className="Practicegoto hover:text-blue-400 cursor-pointer"> &gt;&gt; Practice</NavLink>
                        <NavLink to={`/${props.sub.toLowerCase()}`} className="physicsgoto hover:text-blue-400 cursor-pointer"> &gt;&gt; {props.sub}</NavLink>
                    </div>
                    <span className={`${!istheory && 'border-l-4  border-blue-500 bg-blue-100 text-blue-500'} pl-3 py-2 mb-[2px] questions cursor-pointer text-lg font-semibold`} onClick={noTheory}> Practice Questions</span>
                    <Div />
                    <span className={`${istheory && 'border-l-4  border-blue-500 bg-blue-100 text-blue-500'} theory pl-3 py-2 mb-[2px] cursor-pointer text-lg font-semibold`} onClick={yesTheory}> Subjective </span>
                    <Div />
                </div>
    </div>
  )
}

export default ShowSummary
