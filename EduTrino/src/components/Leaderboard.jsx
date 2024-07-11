import React from 'react'
import Navbar from './Navbar'

const Leaderboard = () => {
    return (
        <div>
            <Navbar />
            <h1 className="cardHeading text-center my-8 font-semibold">Global LeaderBoard</h1>
            <div className="headings font-semibold 500:text-[30px] text-lg 550:border-[4px] border-2 border-white md:w-[75vw] w-[95%] mx-auto p-2 flex gap-4 justify-between">
                <span className="position">Position</span>
                <span className="name">Name</span>
                <span className="class">Class</span>
                <span className="score">Score</span>
            </div>
            <div className="players min-h-[70vh] border-2 border-black bg-violet-100 mt-4 md:w-[75vw] w-[95%] mx-auto mb-10">
                 
            </div>
        </div>
    )
}

export default Leaderboard
