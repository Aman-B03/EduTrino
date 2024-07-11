import React from 'react'
import Navbar from './Navbar'
import sample from '../assets/samplePaper.jpg'

const QuestionPaper = () => {
    return (
        <>
            <Navbar />
            <h1 className="text-center cardHeading font-semibold mt-[10vh] underline decoration-[#5ED9E1] decoration-4 underline-offset-8">Our Paper Collection</h1>
            <div className='550:w-[500px] w-[90vw] mx-auto flex flex-col gap-4  mt-10'>
                <div className="physics w-full h-[45vh] pt-6 border-white border-2 flex flex-col gap-3 items-center"><span className="image w-[75%] overflow-hidden"><img src={sample} alt="physics-question-paper" className='w-full object-contain center' /></span><span className="subject text-xl px-2 my-2">Practice the previous year questions of Physics</span></div>
                <div className="chemistry w-full h-[45vh] pt-6 border-white border-2 flex flex-col gap-3 items-center"><span className="image w-[75%] overflow-hidden"><img src={sample} alt="physics-question-paper" className='w-full object-contain center' /></span><span className="subject text-xl px-2 my-2">Practice the previous year questions of Chemistry</span></div>
                <div className="Maths w-full h-[45vh] pt-6 border-white border-2 flex flex-col gap-3 items-center"><span className="image w-[75%] overflow-hidden"><img src={sample} alt="physics-question-paper" className='w-full object-contain center' /></span><span className="subject text-xl px-2 my-2">Practice the previous year questions of Maths</span></div>
                <div className="cn w-full h-[45vh] pt-6 border-white border-2 flex flex-col gap-3 items-center"><span className="image w-[75%] overflow-hidden"><img src={sample} alt="physics-question-paper" className='w-full object-contain center' /></span><span className="subject text-xl px-2 my-2">Practice the previous year questions of CN</span></div>
                <div className="ct w-full h-[45vh] pt-6 border-white border-2 flex flex-col gap-3 items-center"><span className="image w-[75%] overflow-hidden"><img src={sample} alt="physics-question-paper" className='w-full object-contain center' /></span><span className="subject text-xl px-2 my-2">Practice the previous year questions of CT</span></div>
                <div className="se w-full h-[45vh] pt-6 border-white border-2 flex flex-col gap-3 items-center"><span className="image w-[75%] overflow-hidden"><img src={sample} alt="physics-question-paper" className='w-full object-contain center' /></span><span className="subject text-xl px-2 my-2">Practice the previous year questions of SE</span></div>
                <div className="c# w-full h-[45vh] pt-6 border-white border-2 flex flex-col gap-3 items-center"><span className="image w-[75%] overflow-hidden"><img src={sample} alt="physics-question-paper" className='w-full object-contain center' /></span><span className="subject text-xl px-2 my-2">Practice the previous year questions of C#</span></div>

            </div>
        </>
    )
}

export default QuestionPaper
