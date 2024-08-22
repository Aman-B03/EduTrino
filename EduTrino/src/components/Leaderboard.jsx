import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Leaderboard = () => {

    // const [allUsers, setAllUsers] = useState([])
    const [sortedUsers, setSortedUsers] = useState([])
    let position = 0;

    useEffect(()=>{
        position = 0;
        axios.get('http://localhost:3000/score/leaderboard').then((response)=>{
            const data = response.data;
            // setAllUsers(data);
            setSortedUsers(data.sort((a,b)=>{
               return (b.score - a.score)
            }))
        })
    },[])
    

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
                {sortedUsers.map((item)=>{

                    return(
                        <div className='flex w-full bg-slate-200 justify-between text-black text-lg px-6 my-2' key={item.id}>
                            {position += 1}
                            {/* <div className="position">{position}</div> */}
                            <div className="name">{item.name}</div>
                            <div className="class">{item.class}</div>
                            <div className="score">{item.score}</div>

                        </div>
                    )
                })}
                 
            </div>
        </div>
    )
}

export default Leaderboard
